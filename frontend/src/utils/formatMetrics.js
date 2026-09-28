const formatMetrics = (metrics) => {

    // Formateamos a horas:minutos:segundos
    const hours = Math.floor(metrics.uptime / 3600);
    const minutes = Math.floor((metrics.uptime % 3600) / 60);
    const seconds = (metrics.uptime % 60).toFixed(0);

    const h = hours < 10 ? '0' + hours : hours;
    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;

    const cpu = `${metrics.cpu}%`;
    const ram = `${metrics.ram}%`;
    const diskUsedGB = `${metrics.diskUsedGB} GB`;
    const diskTotalGB = `${metrics.diskTotalGB} GB`;
    const uptime = `${h}:${m}:${s}`;
    const metricsInfo = {
        cpu: cpu,
        ram: ram,
        diskUsedGB: diskUsedGB,
        diskTotalGB: diskTotalGB,
        uptime: uptime
    }

    return metricsInfo;
}

export default formatMetrics;