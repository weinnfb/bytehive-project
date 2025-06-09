import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";

const theme = createTheme ({
    breakpoints,
    palette,
    typography: {
        fontFamily: 'Public Sans',
    }
});
export default theme;