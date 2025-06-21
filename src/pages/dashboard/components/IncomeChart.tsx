import { styled, Typography } from "@mui/material";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const data = [
    { name: 'P1', value: 2.45 },
    { name: 'P2', value: 2.45 },
    { name: 'P3', value: 2.45 },
    { name: 'P4', value: 15.29 },
    { name: 'P5', value: 27.94 },
    { name: 'P6', value: 53.92 },
    { name: 'P7', value: 61.47 },
    { name: 'P8', value: 69.31 },
    { name: 'P9', value: 58.73 },
    { name: 'P10', value: 64.02 },
    { name: 'P11', value: 69.31 },
    { name: 'P12', value: 89.52 },
    { name: 'P13', value: 89.66 },
    { name: 'P14', value: 89.52 },
    { name: 'P15', value: 69.31 },
    { name: 'P16', value: 58.87 },
    { name: 'P17', value: 48.63 },
];

const IncomeChart = () => {
    return (
        <Card>
            <TopRow>
                <LeftColumn>
                    <Title>
                        Total Incomes
                    </Title>
                    <Amount>
                        $9,990
                    </Amount>
                </LeftColumn>
                <RightColumn>
                    <Growth>
                        <TrendingUpIcon fontSize="small" sx={{ color: '#004B50' }} />
                        +8.2%
                    </Growth>
                    <Note>
                        than last week
                    </Note>
                </RightColumn>
            </TopRow>

            <ChartSection>
                <ResponsiveContainer width="100%" height={118}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip />
                        <Line
                            type="basis"
                            dataKey="value"
                            stroke="#00A76F"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartSection>
        </Card>
    )
}

const Card = styled('div')({
    display: 'flex',
    background: 'linear-gradient(135deg, #D8F6E4 0%, #E6FAF0 100%)',
    width: 344,
    padding: 24,
    borderRadius: 16,
    justifyContent: 'center',
    gap: 24,
    flexDirection: 'column'
});

const TopRow = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
});

const LeftColumn = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start'
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5
}));

const Amount = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.5
}));

const RightColumn = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-end'
});

const Growth = styled(Typography)({
    fontSize: 14,
    fontWeight: 600,
    color: '#004B50',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
});

const Note = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    opacity: 0.8
}));

const ChartSection = styled('div')({
    display: 'flex',
    height: 118,
    padding: '15.34px 0.289px 15.447px 0px',
    justifyContent: 'center',
    alignItems: 'center',
});


export default IncomeChart; 