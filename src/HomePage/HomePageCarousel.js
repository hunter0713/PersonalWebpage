import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Button,Paper} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import {useHistory} from 'react-router-dom';
import catImg from './Dash.jpg'
import vacationImg from './Colorado.jpg'
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
            name: "My Cat",
            description: "Dash, my cat, the most friendly cat you can find",
            img: catImg,
        },
        {
            name: "Colorado Vacation",
            description: "Camping and hiking are some of my favorite hobbies when I have the opportunity to get out",
            img: vacationImg,
        }
    ]

    return (
      <div>
        <Carousel className={classes.carousel}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
  );
}
