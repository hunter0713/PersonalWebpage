import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Button,Paper} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import {useHistory} from 'react-router-dom';
import catImg from './Dash.jpg'
import vacationImg from './Colorado.jpg'
import gradPic from './GradPic.PNG'
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
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%',
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

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img src={props.item.img} alt="Logo" />;
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default function HomePageCarousel(props) {
  const classes = useStyles();
    var items = [
        {
            name: "Graduation Picture",
            description: "My Graduation",
            img: gradPic,
        },
        {
            name: "My Cat",
            description: "Dash, my cat",
            img: catImg,
        },
        {
            name: "Colorado Vacation",
            description: "Picture Taken in Glenwood Springs, CO",
            img: vacationImg,
        }


    ]

    return (
      <div className={classes.root}>
        <Carousel className={classes.carousel}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
  );
}
