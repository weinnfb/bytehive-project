import { styled } from '@mui/material'
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import AuthLayout from '../../layout/AuthLayout';
import { useState } from 'react';
import Container from '../../componets/Container';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <Wrapper>
            <Container>
                <AuthLayout>
                    {isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} /> : <SignUpForm onSwitch={() => setIsLogin(true)} />}
                </AuthLayout>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    width: '100vw',
    minHeight: '100vh',
}))


export default AuthPage;