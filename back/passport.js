// back/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // ACÁ ES DONDE RECIBIMOS LOS DATOS DE GOOGLE
    // Por ahora, solo devolvemos el perfil para ver si funciona.
    // Más adelante, aquí haremos el INSERT en la base de datos (Usuario).
    
    console.log("Perfil de Google recibido:", profile.displayName);
    return done(null, profile);
  }
));

// Esto sirve para que la sesión recuerde al usuario
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});