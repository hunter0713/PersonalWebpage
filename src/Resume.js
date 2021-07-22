import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom'
import {AppBar, Toolbar,IconButton,Typography,Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MenuIcon from '@material-ui/icons/Menu'
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import ResumeAccordion from './ResumeAccordion'
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
  buttons: {
    backgroundColor: "#55868C",
  },
  introduction: {
    textAlign: "left",
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(50),
    marginTop: theme.spacing(4),

  },
}));

export default function Resume(props) {
  const classes = useStyles();
  const history = useHistory();
  const [classDesc, setClassDesc] = useState(false);


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
Hunter Cobb's Resume
</Typography>
<Typography variant="body1" className={classes.introduction}>
As a motivated and recently graduated software engineer, I’m extremely excited to contribute under
positions that fit my skills and ability. Over my career at the University of Kansas, I've
completed a collection of courses and projects that make me a good fit for many software positions
that include not only software literacy but also team and leadership skills. Below, I've listed my resume
as well as all related coursework I completed in my time in college.
</Typography>
<ResumeAccordion />


    </div>
  );
}
