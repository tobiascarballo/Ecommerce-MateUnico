require('dotenv').config({ path: './.env' });
const { Pool } = require('pg');
const db = new Pool({
  user: process.env.DB_USER, host: process.env.DB_HOST,
  database: process.env.DB_DATABASE, password: process.env.DB_PASSWORD, port: process.env.DB_PORT
});

async function run() {
  const strapiUrl = process.env.STRAPI_URL || 'http://localhost:1337';
  const strapiToken = process.env.STRAPI_API_TOKEN;

  // 1. Borrar el pedido vacío de prueba (id_venta=0)
  const rFind = await fetch(`${strapiUrl}/api/pedidos?filters[id_venta][$eq]=0`, {
    headers: { 'Authorization': `Bearer ${strapiToken}` }
  });
  const dFind = await rFind.json();
  if (dFind.data && dFind.data.length > 0) {
    const docId = dFind.data[0].documentId;
    const rDel = await fetch(`${strapiUrl}/api/pedidos/${docId}`, {
      method: 'DELETE', headers: { 'Authorization': `Bearer ${strapiToken}` }
    });
    console.log('Pedido de prueba eliminado, HTTP:', rDel.status);
  }

  // 2. Traer datos reales de la venta 88 desde PostgreSQL
  const { rows } = await db.query(`
    SELECT v.id, v.total, v.estado, v.codigo_cupon,
      u.email as cliente_email,
      (SELECT string_agg(dv.cantidad || 'x ' || COALESCE(p.descripcion, c.descripcion, '?'), ' | ')
       FROM detalle_venta dv
       LEFT JOIN Producto p ON dv.id_producto = p.id
       LEFT JOIN Combo c ON dv.id_combo = c.id
       WHERE dv.id_venta = v.id) as detalle,
      e.empresa_envio as metodo_envio,
      e.estado as estado_envio
    FROM venta v
    LEFT JOIN Usuario u ON v.id_usuario = u.id
    LEFT JOIN Envio e ON e.id_venta = v.id
    WHERE v.id = 88
  `);

  if (!rows.length) { console.error('Venta 88 no encontrada'); await db.end(); return; }
  const v = rows[0];

  const estadoMap = { 'Pendiente': 'Pendiente', 'Confirmado': 'Aprobado', 'Cancelado': 'Cancelado' };

  const payload = {
    data: {
      id_venta: 88,
      cliente_email: v.cliente_email || 'anonimo',
      total: Math.round(v.total),  // biginteger en Strapi, no acepta decimales
      estado_venta: estadoMap[v.estado] || v.estado,
      estado_envio: v.estado_envio || 'Preparando',
      metodo_envio: v.metodo_envio || 'N/A',
      detalle_producto: v.detalle || 'Sin detalle'
    }
  };

  console.log('Sincronizando venta 88:', JSON.stringify(payload.data, null, 2));

  // 3. POST a Strapi
  const rPost = await fetch(`${strapiUrl}/api/pedidos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${strapiToken}` },
    body: JSON.stringify(payload)
  });
  const dPost = await rPost.json();
  console.log('\nResultado HTTP:', rPost.status);
  if (rPost.ok) {
    console.log('✅ Pedido 88 sincronizado en Strapi. documentId:', dPost.data.documentId);
  } else {
    console.error('❌ Error:', JSON.stringify(dPost, null, 2));
  }

  await db.end();
}

run().catch(e => { console.error('ERR:', e.message); db.end(); });
