import { styled, Typography } from "@mui/material";
import type { TabItem } from "../../../mocks/sideBarMocks";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  tabs: TabItem[];
};

const Sidebar = ({ activeTab, setActiveTab, tabs }: SidebarProps) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src="/logo.svg" />
      </LogoWrapper>
      <TopSection>
        <TitleBox>
          <Title>
            Overview
          </Title>
        </TitleBox>
        <TabsWrapper>
          {tabs.map((tab) => (
            <TabButton
              key={tab.value}
              active={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
            >
              <TabContent>
                {tab.icon}
                {tab.label}
              </TabContent>
            </TabButton>
          ))}
        </TabsWrapper>
      </TopSection>

      <ProfileCard>
        <ProfileAvatarWrapper>
          <ProfileAvatar>
            <img src="/avatars/avatar3.png" />
          </ProfileAvatar>
          <StatusBadge />
          <PlanBadge>Free</PlanBadge>
        </ProfileAvatarWrapper>

        <ProfileInfo>
          <ProfileName>Hudson Alvarez</ProfileName>
          <ProfileEmail>hudson.alvarez@gmail.com</ProfileEmail>
        </ProfileInfo>

        <UpgradeButton>
          Upgrade to Pro
        </UpgradeButton>
      </ProfileCard>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  width: 280,
  height: '100%',
  flexDirection: 'column',
  padding: '0 16px 40px 16px',
  borderRight: '1px dashed rgba(145, 158, 171, 0.20)',
  background: '#fff',
});

const LogoWrapper = styled('div')({
  padding: '24px 16px 8px 16px',
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: 8,
});

const Logo = styled('img')({
  width: 40,
  height: 40,
});

const TopSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: '100%',
});

const TitleBox = styled('div')({
  display: 'flex',
  padding: '16px 0px 8px 12px',
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1.5,
  textTransform: 'uppercase',
}));

const TabsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

const TabButton = styled('button')<{ active: boolean }>(({ active }) => ({
  background: active ? '#E8FCEF' : 'transparent',
  border: 'none',
  padding: '8px 8px 8px 16px',
  textAlign: 'left',
  cursor: 'pointer',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  color: active ? '#00A76F' : '#637381',
  fontSize: 14,
  fontWeight: 600,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#F4F6F8',
  },
}));

const TabContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

const ProfileCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 14,
  marginTop: 'auto',
});

const ProfileAvatarWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProfileAvatar = styled('div')({
  width: 48,
  height: 48,
  borderRadius: '50%',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const StatusBadge = styled('div')({
  position: 'absolute',
  bottom: 2,
  right: 2,
  width: 10,
  height: 10,
  backgroundColor: '#22C55E',
  borderRadius: '50%',
});

const PlanBadge = styled('div')({
  position: 'absolute',
  top: -8,
  right: -16,
  backgroundColor: '#22C55E',
  color: '#fff',
  padding: '0px 4px',
  borderRadius: '6px 6px 6px 2px',
  fontSize: 12,
  fontWeight: 700,
});

const ProfileInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
});

const ProfileName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.5,
}));

const ProfileEmail = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.5,
}));

const UpgradeButton = styled('button')({
  width: '100%',
  padding: '6px 12px',
  backgroundColor: '#212B36',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#111827',
  },
});

export default Sidebar;