import type { ReactNode } from "react";
import { styled} from "@mui/material";
import Sidebar from "../pages/dashboard/components/SideBar";
import type { TabItem } from "../mocks/sideBarMocks";

interface Props {
    children: ReactNode
    activeTab: string;
    setActiveTab: (value: string) => void;
    tabs: TabItem[];
};

const DashboardLayout = ({ activeTab, setActiveTab, tabs, children }: Props) => {
    return (
        <Wrapper>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            <Content>{children}</Content>
        </Wrapper>
    )
};

const Wrapper = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%'
});

const Content = styled('div')({
    display: 'flex',
    padding: '88px 40px 0px 40px',
    width: 1160,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
})

export default DashboardLayout;