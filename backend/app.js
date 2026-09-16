const express = require("express");
const cors = require('cors');
const app = express();

// Confiuración de CORS para peticiones HTTP tradicionales
const corsOptions = {
    origin: process.env.CLIENT_URL
}

app.use(cors(corsOptions));
app.use(express.json());

module.exports = app;