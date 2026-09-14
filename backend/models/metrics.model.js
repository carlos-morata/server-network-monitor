const mongoose = require("mongoose");

const objectSchema = {
    deviceId: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    cpu: {
        type: Number,
        required: true
    },
    ram: {
        type: Number,
        required: true
    },
    diskUsedGB: {
        type: Number,
        required: true
    },
    diskTotalGB: {
        type: Number,
        required: true
    },
    uptime: {
        type: Number,
        required: true
    }
}

// Crear Esquema
const metricsSchema = mongoose.Schema(objectSchema);

// Crear Modelo
const Metric = mongoose.model('Metric', metricsSchema);

// Para persistir un snapshot
const saveMetrics = async (metricsData) => await Metric.create(metricsData);
// Orden descendente y límite parametrizado
const getMetrics = async (limit) => await Metric.find().sort({ timestamp: -1 }).limit(limit);

module.exports = {
    saveMetrics,
    getMetrics
};