import { styled } from '@mui/material'
import { useState } from 'react';
import Container from '../../componets/Container';
import DashboardLayout from '../../layout/DashboardLayout';
import { dashboardTabs } from '../../mocks/sideBarMocks';
import OverviewComponent from './components/OverviewComponent';
import AnalyticsComponent from './components/AnalyticsComponent';
import BookingComponent from './components/BookingComponent';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewComponent />;
            case 'analytics':
                return <AnalyticsComponent />;
            case 'booking':
                return <BookingComponent />;
            default:
                return <div>Not found</div>;
        }
    };
    return (
        <Wrapper>
            <Container>
                <DashboardLayout
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabs={dashboardTabs}
                >
                    {renderContent()}
                </DashboardLayout>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    width: '100vw',
    minHeight: '100vh',
}));

export default DashboardPage;