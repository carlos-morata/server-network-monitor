import React from "react";
import useSocket from "../../hooks/useSocket";
import MetricCard from "../MetricCard/MetricCard";
import formatMetrics from "../../utils/formatMetrics";

const Dashboard = () => {
    // Hook de useSocket
    const metrics = useSocket();

    // Comprobamos que existen métricas
    if(!metrics) return <p>Cargando...</p>;

    // Función de formateo de las métricas
    const formattedMetrics = formatMetrics(metrics);

    // Array de métricas para recorrerlas
    const metricsList = [
        { label: 'CPU: ', value: formattedMetrics.cpu},
        { label: 'RAM: ', value: formattedMetrics.ram},
        { label: 'DiskUsedGB: ', value: formattedMetrics.diskUsedGB},
        { label: 'DiskTotalGB: ', value: formattedMetrics.diskTotalGB},
        { label: 'Uptime: ', value: formattedMetrics.uptime}
    ]


    return ( <section>
    { metricsList.map((item) => (
        <MetricCard 
            key={item.label}
            label={item.label}
            value={item.value}
        />
    )) }
    </section> )
};

export default Dashboard;