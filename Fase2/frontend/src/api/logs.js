import axios from 'axios';

// axios api call
export const getLogs = async () => {
    const response = await axios.get('http://localhost:8080/get_logs', {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        },
    });
    const data = await response.data;
    return data;
};
