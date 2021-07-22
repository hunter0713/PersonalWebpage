import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    flexGrow: 1,
    marginLeft: theme.spacing(20),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: "#55868C",
},
  resumeTitle: {
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(50),
  },
  alignAccordianContent: {
    flexGrow: 1,
    flexDirection: "column",
  },
  subHeader: {
    fontWeight: 'bold',
  },
}));

export default function ResumeAccordion() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{props.first}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{props.second}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{props.third}</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Classes</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={1}>
<Grid container item xs={12} spacing={3}>
  <FormRow first="EECS 581/582: Senior Design" second="EECS 647: Intro to Database Systems" third="EECS 565: Intro Info and Cmptr Security"/>
</Grid>
<Grid container item xs={12} spacing={3}>
  <FormRow first="EECS 649: Intro to Artificial Intelligence" second="EECS 660: Fundamentals of Computer Algorithms" third="EECS 563: Intro to Communication Networks"/>
</Grid>
<Grid container item xs={12} spacing={3}>
  <FormRow first="EECS 560: Data Structures" second="EECS 665: Compiler Construction" third="EECS 662: Programming Languages"/>
</Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
          Resume
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.alignAccordianContent}>
          <Typography variant="h2" gutterBottom="true">
            Hunter Cobb
          </Typography>
          <Typography variant="h5" className={classes.subHeader} paragraph="true">
            Education:
          </Typography>
          <Typography variant="body1" inline>
          Bachelor of Science in Computer Science(May 2021)
          </Typography>
          <Typography variant="body1" inline>
          University of Kansas, Lawrence, KS
          </Typography>
          <Typography variant="body1" paragraph="true">
          GPA: 3.31
          </Typography>
          <Typography variant="h5" className={classes.subHeader}>
          Programming Competencies:
          </Typography>
          <Typography variant="body1" inline>
          <ul>
              <li>Languages: Javascript (React Framework), C++, PHP, Python, SQL, HTML/CSS</li>
              <li>Databases: MySQL</li>
              <li>Other Skills: Git, AWS Console, Docker, Figma, Linux, WSL, Jupyter</li>
        </ul>
          </Typography>
          <Typography variant="h5" className={classes.subHeader} paragraph="true">
            Work Experience:
          </Typography>
          <Typography variant="body2" inline>
          Starbucks Coffee - Overland Park, KS
          </Typography>
          <Typography variant="body2" inline>
          Barista Partner
          </Typography>
          <Typography variant="body2" inline paragraph="true">
          August 2016 - August 2017
          </Typography>
          <Typography variant="body1" inline paragraph="true">
          Interpersonal skills and teamwork including advising customers on what to purchase and fellow
          employees on how to most efficiently help customers, keep the store clean, keep quality of product
          and keep collected during peak business hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
