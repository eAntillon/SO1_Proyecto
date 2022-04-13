const redis = require("redis");
require("dotenv").config();

const getRedisLogs = async () => {
    let data = [];
    const client = redis.createClient({
        host:process.env.REDIS_HOST,
        port:process.env.REDIS_PORT
    });
    await client.connect();
    const keys = await client.keys('*');
    for(let key of keys){
        const dato = await client.get(key);
        data.push(dato);
    }
    return data;
}

module.exports = {
    getRedisLogs
}