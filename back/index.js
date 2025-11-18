const express = require('express');
const cors = require('cors');
const db = require('./db'); // Importamos nuestra conexión a la BD

const app = express();
const PORT = 3001; // Puerto para el back-end

// Middlewares
app.use(cors()); // Permite que React (en otro puerto) haga peticiones
app.use(express.json()); // Permite leer JSON que venga en el body

/*
=================================================
RUTA DE PRUEBA (para ver si todo funciona)
=================================================
*/
app.get('/', (req, res) => {
    res.send('API de Mate Único funcionando');
});

/*
=================================================
RUTA REAL: OBTENER TODOS LOS PRODUCTOS
=================================================
*/
app.get('/api/productos', async (req, res) => {
    try {
    // Usamos el 'db' que importamos para hacer una consulta
        const { rows } = await db.query('SELECT * FROM Producto');
        res.json(rows); // Enviamos los productos como respuesta JSON
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ponemos el servidor a escuchar
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});