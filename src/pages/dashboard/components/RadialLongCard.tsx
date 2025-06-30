import { styled, Typography } from '@mui/material';
import RadialChart from './RadialChart';
import { radialSold, radialPending } from '../../../mocks/radialMocks';

const RadialLongCard = () => {
    const charts = [
        { data: radialSold, value: 9990, label: 'Sold' },
        { data: radialPending, value: 10989, label: 'Pending for payment' },
    ];

    return (
        <Wrapper>
            {charts.map((chart, idx) => (
                <>
                    <Item key={chart.label}>
                        <RadialChart data={chart.data} text={`${chart.data[1].uv}%`} />
                        <Info>
                            <Value>{chart.value.toLocaleString()}</Value>
                            <Label>{chart.label}</Label>
                        </Info>
                    </Item>
                    {idx < charts.length - 1 && <Divider />}
                </>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled('div')({
    display:'flex',
    background: '#fff',
    padding: 40,
    borderRadius: 16,
    boxShadow: '0px 8px 16px rgba(0,0,0,0.04)',
    justifyContent: 'space-between'
});

const Item = styled('div')({
    display:'flex',
    gap: 40,
    alignItems: 'center'
});

const Info = styled('div')({
    display: 'flex',
    gap: 4,
    flexDirection: 'column'
});

const Value = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.5
}));

const Label = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[100],
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5
}));

const Divider = styled('span')({
    display: 'inline-block',
    height: '100%',
    borderLeft: '1px dashed #E0E0E0',
    margin: '0px, 40px'
})

export default RadialLongCard;