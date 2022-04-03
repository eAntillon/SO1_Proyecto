import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

const BarChart = ({ data }) => {
    return (
        <VictoryChart theme={VictoryTheme.material} domainPadding={20} >
            <VictoryBar
                style={{
                    data: {
                        fill: '#da292e',
                    },
                }}
                data={data}
                x="game_name"
                y="count"
                labels={({ datum }) => datum.count}
            />
            <VictoryAxis
                dependentAxis
                style={{
                    grid: { stroke: '#F4F5F7', strokeWidth: 0 },
                }}
            />
            <VictoryAxis
                crossAxis
                theme={VictoryTheme.material}
                style={{
                    grid: { stroke: '#F4F5F7', strokeWidth: 0 },
                }}
            />
        </VictoryChart>
    );
};

export default BarChart;
