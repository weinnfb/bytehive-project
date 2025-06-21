import { styled, Typography } from "@mui/material";

interface StatItem {
    label: string;
    value: number;
    max: number;
    color: string;
}


const BookingStatsCard = () => {
    const stats: StatItem[] = [
        {
            label: 'PENDING',
            value: 56000,
            max: 100000,
            color: '#FFA500',
        },
        {
            label: 'CANCELED',
            value: 50456,
            max: 100000,
            color: '#FF5630',
        },
        {
            label: 'SOLD',
            value: 155670,
            max: 300000,
            color: '#22C55E',
        },
    ];

    return (
        <Card>
            <Title>Booked</Title>
            {stats.map((stat) => (
                <StatRow key={stat.label}>
                    <LabelValue>
                        <Label>{stat.label}</Label>
                        <Value>{stat.value.toLocaleString()}</Value>
                    </LabelValue>
                    <ProgressBar>
                        <ProgressFill
                            $color={stat.color}
                            style={{ width: `${(stat.value / stat.max) * 100}%` }}
                        />
                    </ProgressBar>
                </StatRow>
            ))}
        </Card>
    );
};


const Card = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    gap: 24,
    width: 344,
    borderRadius: 16,
    background: '#fff',
    boxShadow: "0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.5
}));


const StatRow = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
});

const LabelValue = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%'
});

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 1.5,
    textTransform: 'uppercase'
}));

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.5,
}));

const ProgressBar = styled('div')({
    height: 8,
    display: 'flex',
    width: '100%',
    borderRadius: 50,
    background: 'rgba(145, 158, 171, 0.16)',
});

const ProgressFill = styled('div')<{ $color: string }>(({ $color }) => ({
    height: '100%',
    backgroundColor: $color,
    borderRadius: 50,
}));


export default BookingStatsCard;
