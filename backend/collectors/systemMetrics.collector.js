const si = require('systeminformation');
const os = require('os');
const BYTES_PER_GB = 1073741824;

const getSystemMetrics = async () => {
    // Tiempo de actividad
    const active = os.uptime();
    // Información de cpu, ram y disco
    const [cpu, ram, disk] = await Promise.all([
        si.currentLoad(), si.mem(), si.fsSize()
    ])
    const dataCpu = parseFloat(cpu.currentLoad.toFixed(2))
    const dataRam = parseFloat(((ram.used / ram.total) * 100).toFixed(2));
    const dataDiskUsedGB = parseFloat((disk[0].used / BYTES_PER_GB).toFixed(2));
    const dataDiskTotalGB = parseFloat((disk[0].size / BYTES_PER_GB).toFixed(2));
    return {
        cpu: dataCpu,
        ram: dataRam,
        diskUsedGB: dataDiskUsedGB,
        diskTotalGB: dataDiskTotalGB,
        uptime: active
    }
}

module.exports = {
    getSystemMetrics
} 