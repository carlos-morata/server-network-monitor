import axios from 'axios';
const VITE_API_URL = import.meta.env.VITE_API_URL;

const getMetricHistory = async (limit = 50) => {

    try {
        const response = await axios.get(`${VITE_API_URL}/metrics/history?limit=${limit}`);

        return response.data;
    } catch(err) {
        console.error(err);
        return [];
    }

}

export default getMetricHistory;