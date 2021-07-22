import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom'
import {AppBar, Toolbar,IconButton,Typography,Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff'
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    backgroundColor: "#55868C",
  },
}));
export default function HomePage(props) {
  const classes = useStyles();
  const history = useHistory();

  function goToResume(){
		history.push({
		   pathname: '/Resume',
		});
  }
  function goToHome(){
    history.push({
       pathname: '/',
    });
  }
  function goToGithub(){
    history.push({
       pathname: '/github',
    });
  }
  return (
    <div className={classes.root}>
    <AppBar position="static">
  <Toolbar className={classes.buttons}>
  <Button color="inherit" onClick={()=>{goToHome()}}>Home </Button>
  <Button color="inherit" onClick={()=>{goToResume()}}>Resume</Button>
  <Button color="inherit" onClick={()=>{goToGithub()}}>GitHub</Button>
  </Toolbar>
</AppBar>
<Typography variant="h6" className={classes.title}>
  Hunter Cobb's Website
</Typography>

    </div>
  );
}
