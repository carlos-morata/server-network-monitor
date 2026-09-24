import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
const VITE_SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

const useSocket = () => {
    const [ metrics, setMetrics ] = useState();

    useEffect(() => {
        // Apuntar al endpoint y listener de evento actualizando estado
        const socket = io(`${VITE_SOCKET_URL}`).o('metrics:update', (dataMetrics) => {
            setMetrics(dataMetrics)
        })

        // Limpieza para desconectar el socket al desmontar
        return () => { socket.disconnect(); };
    }, []);

    // Acceder al valor
    return metrics;
}

export default useSocket;