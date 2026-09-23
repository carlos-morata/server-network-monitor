require('dotenv').config();
require('./config/db');
// Importar módulo HTTP nativo de Node.js
const http = require('node:http');
// Importamos la clase de Server de socket.io
const { Server } = require('socket.io');
const app = require('./app');
const PORT = process.env.PORT;

const { setupMetricsSocket } = require('./sockets/metrics.socket');
const { startMetricsService } = require('./services/metrics.service');

// Crear Servidor HTTP montado sobre Express
const server = http.createServer(app);

// Inicializar Socket.io pasando como argumento el servidor HTTP
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"]
    }
});

// Llamada a función de Socket.io / Service
setupMetricsSocket(io);
startMetricsService(io);

// Activar servidor HTTP unificado para escuchar las peticiones en el puerto específicado
server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}/`);
});