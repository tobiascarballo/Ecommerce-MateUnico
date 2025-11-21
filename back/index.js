const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const session = require('express-session'); // Importar session
const passport = require('passport');       // Importar passport
require('./passport');                      // Importar tu configuración nueva

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// 1. CONFIGURACIÓN DE SESIÓN (Obligatorio para login)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// 2. INICIALIZAR PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// --- RUTAS DE AUTENTICACIÓN ---

// A. Ruta para iniciar el proceso (El botón del front llama a esto)
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// B. Ruta a la que Google nos devuelve (Callback)
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login-fallido' }),
  function(req, res) {
    // Si sale todo bien, redirigimos al Home del Front-End
    res.redirect('http://localhost:5173/');
  }
);

// --- TUS OTRAS RUTAS ---
app.get('/', (req, res) => {
  res.send('¡API de Mate Único funcionando!');
});

app.get('/api/productos', async (req, res) => {
    // ... (tu código de productos sigue igual)
    try {
      const { rows } = await db.query('SELECT * FROM Producto');
      res.json(rows);
    } catch (error) {
      // ...
    }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});