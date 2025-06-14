import { styled } from '@mui/material'
import { useState } from 'react';
import Container from '../../componets/Container';
import DashboardLayout from '../../layout/DashboardLayout';

const DashboardPage = () => {
    return (
        <Wrapper>
            <Container>
                <DashboardLayout>
                    lol
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