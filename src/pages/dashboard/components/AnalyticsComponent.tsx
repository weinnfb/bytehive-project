import { styled, Typography } from '@mui/material';

const AnalyticsComponent = () => {
    return (
        <Wrapper>
            <Title>Analytics</Title>
            <SubTitle>This is the analytics tab content.</SubTitle>
        </Wrapper>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.5,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.5,
}));

export default AnalyticsComponent;