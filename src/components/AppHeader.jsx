import { AppBar } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function AppHeader() {
    return(
        <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h4">
            Covid-19 Tracking Application
        </Typography>
        </Toolbar>
        </AppBar>
    )
}

export {AppHeader}