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
            count: count[key]
        };
    });
    // sort by count max to min
    arr.sort((a, b) => {
        return b.count - a.count;
    });
    console.log(arr);
    return arr.slice(0, 3);
};

export const calculatePercentage = (logs) => {
    const count = {};
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
            count: count[key]
        };
    });

    const total = Object.keys(logs).length;

    const percentage = arr.map((item) => {
        return {
            ...item,
            percentage: ((item.count / total) * 100).toFixed(2)
        };
    });
    return percentage;
}