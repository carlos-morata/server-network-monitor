const setupMetricsSocket = (io) => {
    // Escuchar evento de conexión
    io.on('connection', (socket) => {
        console.log(`Cliente conectado con ID: ${socket.id}`)

        // Detectar cuándo un cliente se desconecta
        socket.on('disconnect', () => {
            console.log(`Cliente desconectado: ${socket.id}`)
        })
    })
}

module.exports = {
    setupMetricsSocket
}