import { styled } from '@mui/material'
import LoginForm from './pages/login/components/LoginForm';

function App() {
  return (
    <Wrapper>
      <LoginForm onSwitch={() => console.log("Switch to Sign Up")} />
    </Wrapper>
  )
}

const Wrapper = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  width: '100vw',
  minHeight:'100vh',
  alignItems: "center",
  justifyContent: "center"
}))


export default App;
