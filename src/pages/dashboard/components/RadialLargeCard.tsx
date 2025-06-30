import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { styled, Typography } from "@mui/material";

const soldOut = 120;
const available = 66;

const data = [
    {
        uv: 100,
        fill: 'transparent'
    },
    {
        name: 'Tours',
        uv: 60,
        fill: '#00A76F',
    },
];



const RadialLargeCard = () => {
    return (
        <CardWrapper>
            <Title>
                Tours Available
            </Title>
            <ChartContainer>
                <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="90%"
                        barSize={20}
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <RadialBar
                            background
                            dataKey="uv"
                            cornerRadius={10}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <CenterText>
                    <Defenition>Tour</Defenition>
                    <Duration>120</Duration>
                </CenterText>
            </ChartContainer>
            <LegendWrapper>
                <LegendItem>
                    <Indicator>
                        <ColorDot color='#00A76F' />
                        <IndicatorName>
                            Sold out
                        </IndicatorName>
                    </Indicator>
                    <LegendItemDuration>
                        {soldOut} Tours
                    </LegendItemDuration>
                </LegendItem>
                <LegendItem>
                    <Indicator>
                        <ColorDot color='rgba(145, 158, 171, 0.16)' />
                        <IndicatorName>
                            Available
                        </IndicatorName>
                    </Indicator>
                    <LegendItemDuration>
                        {available} Tours
                    </LegendItemDuration>
                </LegendItem>
            </LegendWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    width: 344,
    padding: '24px 24px 45px 24px',
    borderRadius: 16,
    background: '#fff',
    justifyContent: 'center',
    boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)'
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5,
}));

const ChartContainer = styled('div')({
    position: 'relative',
    width: '100%',
    height: 210,
    margin: '0 auto',
    '& .recharts-radial-bar-background-sector:first-of-type': {
        display: 'none'
    }
});

const CenterText = styled('div')({
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    flexDirection: 'column',
    alignItems: 'center'
});

const Defenition = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5
}));

const Duration = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.5
}));

const LegendWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 16
})

const LegendItem = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
});

const Indicator = styled('div')({
    display: 'flex',
    gap: 8,
    alignItems: 'center'
});

const ColorDot = styled('div')(({ color }: { color: string }) => ({
    display: 'flex',
    width: 20,
    height: 20,
    background: color,
    borderRadius: 6
}));

const IndicatorName = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5
}));

const LegendItemDuration = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.5
}));

export default RadialLargeCard;