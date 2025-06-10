import type { ReactNode } from "react";
import { styled } from "@mui/material";

interface Props {
    children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
    return (
        <Wrapper>
            <Left>
            </Left>
            <Right>
                {children}
            </Right>
        </Wrapper>
    )
};

const Wrapper = styled('div')({
    display:'flex',
    width:'100%',
});

const Left = styled('div')({
    display:'flex',
    position:'relative',
    width:'100%',
});

const Right = styled('div')({
    display:'flex',
    maxWidth:'480px',
    padding:'0px 64px',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
})

export default AuthLayout;

