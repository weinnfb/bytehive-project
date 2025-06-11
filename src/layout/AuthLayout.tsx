import type { ReactNode } from "react";
import { Typography, styled } from "@mui/material";

interface Props {
    children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
    return (
        <Wrapper>
            <Left>
                <LeftContent>
                    <Title>
                        Manage the job more effectively with Minimal
                    </Title>
                    <ImageWrapper>
                        <IlussIllustration src="/illustration_dashboard.png" alt="Illustration" />
                    </ImageWrapper>
                </LeftContent>
                <LogoWrapper>
                    <Logo src="/logo.svg" />
                </LogoWrapper>
            </Left>
            <Right>
                {children}
            </Right>
        </Wrapper>
    )
};

const Wrapper = styled('div')({
    display: 'flex',
    width: '100%',
});

const Left = styled('div')({
    display: 'flex',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    background: 'url("/bg.png")'
});

const LeftContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
});

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.5,
    textAlign: 'center',
    maxWidth: 480
}));

const ImageWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 540,
    width: 720
});

const IlussIllustration = styled('img')({
    height: '100%',
    width: '100%',
    objectFit: 'contain',
});

const LogoWrapper = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '40px',
    // zIndex: 1, // если нужно поверх чего-то
    display: 'flex',
    alignItems: 'center',
});

const Logo = styled('img')({
    width: 40,
    height: 40
});

const Right = styled('div')({
    display: 'flex',
    maxWidth: '480px',
    padding: '0px 64px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
})

export default AuthLayout;

