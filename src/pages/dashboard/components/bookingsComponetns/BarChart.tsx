import { styled, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useState } from 'react';
import { statisticData } from '../../../../mocks/barChartMocks';

const StatisticsBarChart = () => {
    const [selectedYear, setSelectedYear] = useState<string | number>('all');

    const handleYearChange = (event: any) => {
        setSelectedYear(event.target.value);
    };

    const filteredData = selectedYear === 'all'
        ? statisticData
        : statisticData.filter((item) => {
            return String(item.year) === String(selectedYear);
        });

    const CustomLegend = () => (
        <LegendContainer>
            <LegendItem>
                <LegendDot color="#00A76F" />
                <LegendText>Sold</LegendText>
            </LegendItem>
            <LegendItem>
                <LegendDot color="#FFAC82" />
                <LegendText>Canceled</LegendText>
            </LegendItem>
        </LegendContainer>
    );

    return (
        <ChartContainer>
            <ChartHeader>
                <HeaderInfo>
                    <Title>Statistics</Title>
                    <Subtitle>(+43% Check In | +12% Check Out) than last year</Subtitle>
                </HeaderInfo>

                <YearSelector>
                    <SelectWrapper>
                        <StyledSelect
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="all">All Years</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </StyledSelect>
                        <ExpandMoreIcon
                            sx={{
                                position: 'absolute',
                                right: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                                color: '#637381',
                                fontSize: '20px'
                            }}
                        />
                    </SelectWrapper>
                </YearSelector>
            </ChartHeader>

            <CustomLegend />

            <ChartWrapper>
                <ResponsiveContainer width="100%" height={288}>
                    <BarChart
                        data={filteredData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        barCategoryGap="40%"
                        maxBarSize={8}
                    >
                        <CartesianGrid
                            strokeDasharray="3"
                            stroke="#F2F4F7"
                            horizontal={true}
                            vertical={false}
                        />

                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#919EAB' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#919EAB' }}
                            domain={[0, 100]}
                            ticks={[0, 20, 40, 60, 80, 100]}
                        />
                        <Bar dataKey="sold" fill="#00A76F" radius={[4, 4, 0, 0]} barSize={8} />
                        <Bar dataKey="canceled" fill="#FFAC82" radius={[4, 4, 0, 0]} barSize={8} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </ChartContainer>
    );
};

const ChartContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    gap: 24,
    width: 712,
    minHeight: 460,
    alignItems: 'center',
    borderRadius: 16,
    background: '#fff',
    boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
});

const ChartHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
});

const HeaderInfo = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
}));

const YearSelector = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const ChartWrapper = styled('div')({
    width: '100%',
    height: 288,
});

const LegendContainer = styled('div')({
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end',
    marginBottom: 8,
});

const LegendItem = styled('div')({
    display: 'flex',
    gap: 8,
    alignItems: 'center'
});

const LegendDot = styled('div')<{ color: string }>(({ color }) => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: color,
}));

const LegendText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 1.5,
}));

const StyledSelect = styled('select')({
    padding: '10px 14px',
    paddingRight: '40px',
    minWidth: '120px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#637381',
    backgroundColor: '#fff',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none',
    height: '40px',
    width: '100%',

    '&:hover': {
        borderColor: '#4F46E5',
    },

    '&:focus': {
        borderColor: '#4F46E5',
        boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.2)',
    },
});

const SelectWrapper = styled('div')({
    position: 'relative',
    display: 'inline-block',
    minWidth: '120px',
});

export default StatisticsBarChart;