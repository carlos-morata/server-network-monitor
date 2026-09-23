const { getSystemMetrics } = require('../collectors/systemMetrics.collector');
const { saveMetrics } = require('../models/metrics.model');
const DEVICE_ID = process.env.DEVICE_ID;

// Guardar el intervalo en milisegundos
const SAVE_INTERVAL_MS = 10 * 60 * 1000;
// Guardar la cuenta del último guardado
let lastSaved = 0;

const startMetricsService = async (io) => {
    setInterval(async () => {
        try {
            let metrics = await getSystemMetrics();
            io.emit('metrics:update', metrics);
            // Momento actual - último guardado -> Para saber cuánto tiempo ha pasado y actualizamos al momento actual
            if((Date.now() - lastSaved) >= SAVE_INTERVAL_MS) {
                lastSaved = Date.now();
                const newMetrics = { ...metrics, deviceId: DEVICE_ID}
                await saveMetrics(newMetrics);
            }
        } catch(err) {
            console.error(err);
        }
    }, 2000)
}

module.exports = {
    startMetricsService
}