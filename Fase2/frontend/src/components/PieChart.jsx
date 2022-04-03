import React from 'react';
import { VictoryChart, VictoryPie, VictoryTheme} from 'victory';
const PieChart = ({data}) => {
    return (
            <VictoryPie
                data={data}
                x="queue"
                y="percentage"
                colorScale={["#2fb380", "#f4bd61"]}
                labels={({ datum }) => `${datum.queue}: ${datum.percentage}`}
                labelRadius={({ innerRadius }) => innerRadius + 40 }
                theme={VictoryTheme.material}
            />
    );
};

export default PieChart;
