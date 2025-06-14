import { styled, Typography } from '@mui/material';

const OverviewComponent = () => {
    return (
        <Wrapper>
            <Title>Overview</Title>
            <SubTitle>This is the overview tab content.</SubTitle>
        </Wrapper>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    textAlign:'center'
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.5,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.5,
}));

export default OverviewComponent;