import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {AppBar, Toolbar,IconButton,Typography,Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Resume from './Resume'
import HomePage from './HomePage'
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

function App() {
  const classes = useStyles();
  return (
    <div>
    </div>
  );
}

export default App;
