import type { ReactNode } from "react";
import { styled, Typography } from "@mui/material";

interface Props {
    children: ReactNode
};

const DashboardLayout = ({ children }: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%'
});

export default DashboardLayout;