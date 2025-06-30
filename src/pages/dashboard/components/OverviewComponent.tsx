import { styled,Typography, IconButton, Badge } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { overviewStats } from '../../../mocks/overviewMocks';
import StatCard from '../../../componets/StatCard';
import IncomeChart from './IncomeChart';
import BookingStatsCard from './BookedChart';
import RadialLongCard from './RadialLongCard';
import RadialLargeCard from './RadialLargeCard';


const OverviewComponent = () => {
    return (
        <PageWrapper>
            <PageHeader>
                <PageTitle>Overview</PageTitle>
                <HeaderActions>
                    <NotificationButton>
                        <Badge badgeContent={1} color="error">
                            <Notifications />
                        </Badge>
                    </NotificationButton>
                    <UserAvatar src="/avatars/avatar1.png" alt="User" />
                </HeaderActions>
            </PageHeader>

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
            <ChartHolder>
                <ChartsWrapper>
                    <CardHolder>
                        <IncomeChart />
                        <BookingStatsCard />
                    </CardHolder>
                    <RadialLongCard />
                </ChartsWrapper>
                <RadialLargeCard />
            </ChartHolder>
        </PageWrapper>
    );
};

const PageWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 40px 0px 40px',
    gap: 40,
    justifyContent: 'flex-start',
    minHeight: '100vh'
});

const PageHeader = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
});

const PageTitle = styled(Typography)({
    fontSize: 32,
    fontWeight: 700,
    color: '#212B36',
    lineHeight: 1.5,
});

const HeaderActions = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
});

const NotificationButton = styled(IconButton)({
    width: 40,
    height: 40,
    borderRadius: 8,
    color: '#637381',
    '&:hover': {
        backgroundColor: '#F0F0F0',
    },
    '& .MuiBadge-badge': {
        backgroundColor: '#FF4842',
        color: '#fff',
        fontSize: 10,
        fontWeight: 600,
        minWidth: 16,
        height: 16,
    }
});

const UserAvatar = styled('img')({
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #E5E5E5',
    cursor: 'pointer',
    '&:hover': {
        borderColor: '#00A76F',
    }
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
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 712
});

const ChartHolder = styled('div')({
    display:'flex',
    gap: 24
})
export default OverviewComponent;