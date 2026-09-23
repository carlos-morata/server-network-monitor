const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metrics.controller');

router.get('/history', metricsController.getMetricsController);

module.exports = router;