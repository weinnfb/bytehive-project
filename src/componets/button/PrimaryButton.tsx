import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PrimaryButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.common.white,
    width:'100%',
    fontSize: 15,
    padding: '11px 16px',
    borderRadius: 8,
    alignItems: 'center',
    fontWeight: 700,
    lineHeight: 1.7,
    "&:hover": {
        backgroundColor: "#1a212c", 
        boxShadow: "none",
    },
}));

export default PrimaryButton;