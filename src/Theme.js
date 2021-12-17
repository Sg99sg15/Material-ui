import { createTheme } from '@mui/material/styles';
import { deepOrange,teal,orange } from '@mui/material/colors';


const theme = createTheme({
    palette:{
        primary:{
            main: teal[300],
            light: orange[200],
        },
        secondary:{
            main:deepOrange[500],
        }
    }
});

export default theme;