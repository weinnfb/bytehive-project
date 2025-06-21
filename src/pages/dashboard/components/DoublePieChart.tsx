import { PieChart, Pie } from "recharts";
import { styled, Typography } from "@mui/material";

const DonutCards = () => {
    const chartData = [
        {
            label: "Sold",
            value: '9,990',
            percentage: 73.9,
            color: "#5BE49B",
        },
        {
            label: "Pending for payment",
            value: '10,989',
            percentage: 45.6,
            color: "#FFAB00",
        },
    ];
    return (
        <Container>
            {chartData.map(({ label, value, percentage, color }, index) => {
                const isLast = index === chartData.length - 1;
                const angle = 90 - (percentage / 100) * 360;

                return (
                    <Card key={label} hasDivider={!isLast}>
                        <ChartWrapper>
                            <PieChart width={120} height={120}>
                                <Pie
                                    data={[{ value: 100 }]}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={42}
                                    outerRadius={50}
                                    fill="#E5E7EB"
                                    stroke="none"
                                />
                                <Pie
                                    data={[{ value: percentage }]}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={42}
                                    outerRadius={50}
                                    startAngle={90}
                                    endAngle={angle}
                                    cornerRadius={10}
                                    fill={color}
                                    stroke="none"
                                />
                            </PieChart>
                            <Percentage style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                {percentage}%
                            </Percentage>
                        </ChartWrapper>

                        <DescriptionPart>
                            <Value>{value.toLocaleString()}</Value>
                            <Label>{label}</Label>
                        </DescriptionPart>
                    </Card>
                );
            })}
        </Container>
    );
};


const Container = styled("div")({
    display: "flex",
    gap: 0,
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
});

const Card = styled("div")<{ hasDivider?: boolean }>(({ hasDivider }) => ({
    display: "flex",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    padding: 40,
    borderRight: hasDivider ? "1px dashed #E5E7EB" : "none",
}));

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.5,
}));

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    whiteSpace: "nowrap",
}));

const Percentage = styled("div")({
    position: "absolute",
    fontWeight: 600,
    fontSize: 14,
    color: '#212B36'
});

const ChartWrapper = styled("div")({
    position: "relative",
    width: 120,
    height: 120,
});

const DescriptionPart = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
    maxWidth: 136
})
export default DonutCards;  