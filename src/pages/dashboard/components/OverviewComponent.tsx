import { styled, Typography } from '@mui/material';
import { overviewStats } from '../../../mocks/overviewMocks';
import StatCard from '../../../componets/StatCard';
import IncomeChart from './IncomeChart';
import BookingStatsCard from './BookedChart';
import DonutCards from './DoublePieChart';

const OverviewComponent = () => {
    return (
        <PageWrapper>
            <CardsSection>
                {overviewStats.map((item) => (
                    <StatCard
                        key={item.label}
                        value={item.value}
                        label={item.label}
                        img={item.img}
                    />
                ))}
            </CardsSection>
            <ChartsWrapper>
            <CardHolder>
                <IncomeChart />
                <BookingStatsCard />
            </CardHolder>
            <DonutCards />
            </ChartsWrapper>
        </PageWrapper>
    );
};

const PageWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '88px 40px 0px 40px',
    gap: 24,
    justifyContent: 'center'
});

const CardsSection = styled('div')({
    display: 'flex',
    gap: 24,
})

const CardHolder = styled('div')({
    display: 'flex',
    gap: 24
});

const ChartsWrapper = styled('div')({
    display:'flex',
    flexDirection:'column',
    gap: 24,
    maxWidth: 712

})
export default OverviewComponent;