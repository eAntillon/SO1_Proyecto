import axios from 'axios';

// axios api call
export const getLogs = async () => {
    // print enviroment variables
    const url = `/get_logs`;
    const response = await axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
        },
    });
    const data = await response.data;
    return data;
};
