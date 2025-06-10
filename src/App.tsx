import { styled } from '@mui/material'
import LoginForm from './pages/login/components/LoginForm';
import SignUpForm from './pages/login/components/SignUpForm';
import AuthLayout from './layout/AuthLayout';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Wrapper>
      <AuthLayout>
        {isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} /> : <SignUpForm onSwitch={() => setIsLogin(true)} />}
      </AuthLayout>
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  width: '100vw',
  minHeight: '100vh',
}))


export default App;
