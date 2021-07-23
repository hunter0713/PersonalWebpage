import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import ResumeDetails from './ResumeDetails';
import ResumeClasses from './ResumeClasses';

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
  "&:hover": {
  background: "#76bac2"
},
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
        <ResumeClasses/>
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
        <Grid container spacing={1}>
<Grid container item xs={12} spacing={3}>

</Grid>
<Grid container item xs={12} spacing={3}>

</Grid>
<Grid container item xs={12} spacing={3}>

</Grid>
</Grid>
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
        <ResumeDetails />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
