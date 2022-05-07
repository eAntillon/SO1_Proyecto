export const filterTop3 = (logs) => {
    // count appearances of each log by id_game
    const count = {};
    logs.forEach((log) => {
        if (count[log.game_name] === undefined) {
            count[log.game_name] = 1;
        } else {
            count[log.game_name] += 1;
        }
    });

    // object to array
    const arr = Object.keys(count).map((key) => {
        return {
            game_name: key,
            count: count[key],
        };
    });
    // sort by count max to min
    arr.sort((a, b) => {
        return b.count - a.count;
    });
    return arr.slice(0, 3);
};

export const calculatePercentage = (logs) => {
    const count = {'RabbitMQ': 0, 'Kafka': 0};
    logs.forEach((log) => {
        if (count[log.queue] === undefined) {
            count[log.queue] = 1;
        } else {
            count[log.queue] += 1;
        }
    });
    const arr = Object.keys(count).map((key) => {
        return {
            queue: key,
            count: count[key],
        };
    });

    const total = Object.keys(logs).length;

    const percentage = arr.map((item) => {
        return {
            ...item,
            percentage: ((item.count / total) * 100).toFixed(2),
        };
    });
    
    return percentage;
};

export const filterTop10 = (data) => {
    // count appearances of each player by winner
    const count = {};
    data.forEach((game) => {
        if (count[game.winner] === undefined) {
            count[game.winner] = 1;
        } else {
            count[game.winner] += 1;
        }
    });

    // object to array
    const arr = Object.keys(count).map((key) => {
        return {
            player: key,
            count: count[key],
        };
    });
    // sort by count max to min
    arr.sort((a, b) => {
        return b.count - a.count;
    });
    // console.log(arr);
    return arr.slice(0, 10);
};

export const getPlayers = (data) => {
    const players = [];
    data.forEach((game) => {
        if (!players.includes(game.winner)) {
            players.push(game.winner);
        }
    });
    //order by number
    players.sort((a, b) => {
        return a - b;
    });
    return players;
};

export const filterPlayer = (data, player) => {
    const filtered = data.filter((game) => {
        return game.winner == player;
    });
    return filtered;
};
