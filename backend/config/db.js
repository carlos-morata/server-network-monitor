const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

// Objeto de conexión para gestionar y representar enlace de Node.js y MongoDB
mongoose.connection.on('connected', () => {
    console.log('¡Conectado a MongoDB✅!')
})

// En caso de error
mongoose.connection.on('error', (err) => {
  console.log('Error en la conexión:', err);
});

module.exports = mongoose;