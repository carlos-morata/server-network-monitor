const metricsModel = require('../models/metrics.model');

const getMetricsController = async (req, res) => {
    const { limit } = req.query;
    const limitMetric = parseInt(limit) || 50;
    try {
        const newMetric = await metricsModel.getMetrics(limitMetric)
        res.status(200).json({ metrics: newMetric});
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: "Error interno del servidor al leer las métricas" });
    }
}

module.exports = {
    getMetricsController
}