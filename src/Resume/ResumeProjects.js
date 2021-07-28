import React from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    flexGrow: 1,
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
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("n/a");
  const [className, setClassName] = useState("na");
  const [technologies, setTechnologies] = useState("na");
  const [videoExt, setVideoExt] = useState("f");
  const [hasVideo, setHasVideo] = useState(false);
  const [githublink,setGithubLink] = useState("");
  const [pageLink,setPageLink] = useState("f");
  const [hasPage,setHasPage] = useState(false);
const handleClickOpen = (name,desc,tech,ext,githubLink,linkToSite) => {
  setOpen(true);
  setClassName(name);
  setDesc(desc);
  setTechnologies(tech);
  setVideoExt(ext);
  setGithubLink(githubLink);
  setPageLink(linkToSite);
  console.log("hi");
  if(ext !== "f"){
    setHasVideo(true);
  }
  else{
    setHasVideo(false);
  }
  if(linkToSite !== "f"){
    setHasPage(true);
  }
  else{
    setHasPage(false);
  }
};

const handleClose = () => {
  setOpen(false);
  setHasVideo(false);
};


  function FormRowProjects(props) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper onClick={() => handleClickOpen(props.first,props.firstDesc,props.firstTech,props.firstVideo,props.firstGithubLink,"f")} className={classes.paper} style={{ cursor: "pointer" }}>{props.first}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper onClick={() => handleClickOpen(props.second,props.secondDesc,props.secondTech,"f",props.secondGithubLink,"f")} className={classes.paper}style={{ cursor: "pointer" }}>{props.second}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper onClick={() => handleClickOpen(props.third,props.thirdDesc,props.thirdTech,"f",props.thirdGithubLink,props.thirdLinkToSite)} className={classes.paper}style={{ cursor: "pointer" }}>{props.third}</Paper>
        </Grid>
      </React.Fragment>
    );
  }



  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
<Grid container item xs={12} spacing={3}>
<FormRowProjects
first="UpNext React App"
firstDesc="A social media focused application allowing students to connect with university organizations and professors with the ultimate intent of promoting the stress-free organization of a student’s responsibilities and deadlines."
firstTech="React JS, MySQL database, Knex JS, Docker Container"
firstVideo="sE_6-ZB4794"
firstGithubLink="/githubUpNext"
second="SquadUp Android App"
secondDesc="Final Project for EECS448: Software Engineering. Mock-Up pickup basketball application designed with KU students in mind. Utilizes PHP and Kotlin. Made using Android Studio IDE."
secondTech="HTML, Kotlin, PHP, MySQL, Java, Android Studio"
secondGithubLink="/githubSquadUp"
third="StudentFirst"
thirdDesc="An online learning application that connects Professors to their students through assignment distribution, and the ability for students to take assignments and submit their answers for the professor to review. Utilizes MySQL and PHP/Bootstrap."
thirdTech="PHP, MySQL, Bootstrap, AWS EC2"
thirdGithubLink="/githubStudentFirst"
thirdLinkToSite="/studentFirstPage"
/>
</Grid>
</Grid>

      <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{className}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{whiteSpace: 'pre-line'}}>
                  {desc}
                  {"\n"}
                  Technologies: {technologies}
                  {"\n"}
                  <Link to={githublink}>Github Repository</Link>
                    {"\n"}
                    {hasPage
                    ? <Link to={pageLink}>Visit Site(Hosted on AWS EC2)</Link>
                    : <div> </div>
                  }

                </DialogContentText>
                {hasVideo
              ?  <iframe
                  id="video"
                  title="video"
                  width="550"
                  height="250"
                  src={"https://www.youtube.com/embed/" + videoExt}
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                :<Typography> </Typography>
              }

              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
    </div>
  );
}
