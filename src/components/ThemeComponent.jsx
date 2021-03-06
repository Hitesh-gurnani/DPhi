import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {
            main: '#F5F5F5',         // Used elsewhere
        },
        success: {
            main: '#C6112E',         // custom button color (seafoam green)
            contrastText: '#FFFFFF', // custom button text (white)
        },
        error: {
            main: '#C6112E',         // custom button color (red)
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;