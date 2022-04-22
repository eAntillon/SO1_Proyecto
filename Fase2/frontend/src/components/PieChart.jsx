import React from 'react';
import { VictoryChart, VictoryPie, VictoryTheme} from 'victory';
const PieChart = ({data}) => {
    console.log(data)
    const data_conv = [{...data[0], percentage: parseFloat(data[0].percentage)}, {...data[1], percentage: parseFloat(data[1].percentage)}]
    return (
            <VictoryPie
                data={data_conv}
                x="queue"
                y="percentage"
                colorScale={["#2fb380", "#f4bd61"]}
                labels={({ datum }) => `${datum.queue}: ${parseFloat(datum.percentage)}`}
                labelRadius={({ innerRadius }) => innerRadius + 40 }
                theme={VictoryTheme.material}
            />
    );
};

export default PieChart;
