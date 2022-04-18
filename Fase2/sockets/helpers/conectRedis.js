const redis = require("redis");
require("dotenv").config();

const getRedisLogs = async () => {
    let data = [];
    const client = redis.createClient({ url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` });
    await client.connect();
    const keys = await client.keys('*');
    for(let key of keys){
        const dato = await client.get(key);
        let code = JSON.parse(dato);
        data.push(code);
    }
    return data;
}

module.exports = {
    getRedisLogs
}