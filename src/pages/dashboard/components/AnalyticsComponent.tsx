import { styled, Typography } from '@mui/material';
import { analyticStats } from '../../../mocks/analyticsMocks';
import StatCard from '../../../componets/StatCard';

const AnalyticsComponent = () => {
    return (
        <PageWrapper>
            <CardsSection>
                {analyticStats.map((item) => (
                    <StatCard
                        key={item.label}
                        value={item.value}
                        label={item.label}
                        img={item.img}
                    />
                ))}
            </CardsSection>
            <SubTitle>
                To be continued...
            </SubTitle>
        </PageWrapper>
    );
};

const PageWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '88px 40px 0px 40px',
    gap: 24,
    alignItems:'center',
    justifyContent:'center'
});

const CardsSection = styled('div')({
    display:'flex',
    gap: 24,
})

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.5,
}));

export default AnalyticsComponent;