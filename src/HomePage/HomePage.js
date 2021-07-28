import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar,Typography,Button,Paper} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import {useHistory} from 'react-router-dom';
import catImg from './Dash.jpg'
import vacationImg from './Colorado.jpg'
import HomePageCarousel from './HomePageCarousel'
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
  },
  buttons: {
    backgroundColor: "#55868C",
  },
  paragraph: {
    textAlign: "left",
    marginRight: "20%",
    marginLeft: "20%",

  },
  carousel: {
    textAlign: "center",
    flexGrow: 1,
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
<div className={classes.paragraph}>
<Typography variant='p'>
This is my personal website! Made using ReactJS and MaterialUI this website is hosted on AWS using AWS Amplify. Below are some images that
encapsulate me as a person and above are links to my github and a resume page that shows off a selection of my prior coursework and projects
as well as a copy of my resume.
</Typography>
</div>
<HomePageCarousel />

    </div>
  );
}
