import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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

export default function ResumeDetails() {
    const classes = useStyles();
  return (
    <div >
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
    </div>
  );
}
