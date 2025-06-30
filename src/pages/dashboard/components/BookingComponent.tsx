import { styled, Typography, IconButton, Badge } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import StatisticsBarChart from './bookingsComponetns/BarChart';
import CustomerReviews from './bookingsComponetns/ReviewCard';

const BookingComponent = () => {
    return (
        <PageWrapper>
            <PageHeader>
                <PageTitle>Booking</PageTitle>
                <HeaderActions>
                    <NotificationButton>
                        <Badge badgeContent={1} color="error">
                            <Notifications />
                        </Badge>
                    </NotificationButton>
                    <UserAvatar src="/avatars/avatar1.png" alt="User" />
                </HeaderActions>
            </PageHeader>

            <ContentWraper>
                <ChartSection>
                    <StatisticsBarChart />
                </ChartSection>

                <CustomerReviews />
            </ContentWraper>
            
        </PageWrapper>
    );
};

const PageWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 40px 0px 40px',
    gap: 40,
    minHeight: '100vh',
    justifyContent: 'flex-start'
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

const ChartSection = styled('div')({
    width: '100%',
});

const ContentWraper = styled('div')({
    display:'flex',
    gap: 24,
    alignItems:'flex-start'
})


export default BookingComponent;