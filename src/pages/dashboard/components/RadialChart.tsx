import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { styled } from '@mui/material';
import type { RadialData } from '../../../mocks/radialMocks';

interface RadialChartProps {
    data: RadialData[];
    text: string;
}

const RadialChart = ({ data, text }: RadialChartProps) => (
    <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
                innerRadius="70%" 
                outerRadius="100%"
                barSize={20} 
                data={data}
                startAngle={90}
                endAngle={-360}
                cx="50%"
                cy="50%"
            >
                <RadialBar
                    background={{ fill: 'rgba(145, 158, 171, 0.16)' }}
                    dataKey="uv"
                    cornerRadius={30}
                />
            </RadialBarChart>
        </ResponsiveContainer>
        <ChartText>{text}</ChartText>
    </ChartWrapper>
);

const ChartWrapper = styled('div')({
    position: 'relative',
    width: 120,
    height: 120,
    '& .recharts-radial-bar-background-sector:first-of-type': {
        display: 'none'
    }

});

const ChartText = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 600,
    fontSize: 14,
    color: '#212B36'
})

export default RadialChart;