import React from 'react';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  const [className, setClassName] = useState("na")

const handleClickOpen = (name,desc) => {
  setOpen(true);
  setClassName(name);
  setDesc(desc);
  console.log("hi");
};

const handleClose = () => {
  setOpen(false);
};


  function FormRow(props) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper onClick={() => handleClickOpen(props.first,props.firstDesc)} className={classes.paper} style={{ cursor: "pointer" }}>{props.first}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper onClick={() => handleClickOpen(props.second,props.secondDesc)} className={classes.paper}style={{ cursor: "pointer" }}>{props.second}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper onClick={() => handleClickOpen(props.third,props.thirdDesc)} className={classes.paper}style={{ cursor: "pointer" }}>{props.third}</Paper>
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
<FormRow
first="EECS 581/582: Senior Design"
firstDesc="The design and implementation phase of a two-semester, team-orientated lecture/laboratory course involving the specification, design, implementation, and documentation of a significant software system. The course includes the consideration of project management, ethics, economics, and technical writing."
second="EECS 647: Intro to Database Systems"
secondDesc="Introduction to the concept of databases and their operations. Basic concepts, database architectures, storage structures and indexing, data structures: hierarchical, network, and relational database organizations. Emphasis on relational databases and retrieval languages SQL, QBE, and ones based on relational algebra and relational calculus; brief description of predicate calculus. Theory of databases, normal forms, normalization, candidates keys, decomposition, functional dependencies, multi-valued dependencies. Introduction to the design of a simple database structure and a data retrieval language"
third="EECS 565: Intro Info and Cmptr Security"
thirdDesc="An introduction to the fundamentals of cryptography and information and computer security. Introduces the basic concepts, theories, and protocols in computer security. Discusses how to apply such knowledge to analyze, design and manage secure systems in the real world. Topic covered: the basics of cryptography, software security, operating system security, database security, network security, privacy and anonymity, social engineering, digital forensics, etc. "
/>
</Grid>
<Grid container item xs={12} spacing={3}>
  <FormRow
  first="EECS 649: Intro to Artificial Intelligence"
  firstDesc="General concepts, search procedures, two-person games, predicate calculus and automated theorem proving, nonmonotonic logic, probabilistic reasoning, rule based systems, semantic networks, frames, dynamic memory, planning, machine learning, natural language understanding, neural networks."
  second="EECS 660: Fundamentals of Computer Algorithms"
  secondDesc="Basic concepts and techniques in the design and analysis of computer algorithms. Models of computations. Simple lower bound theory and optimality of algorithms. Computationally hard problems and the theory of NP-Completeness."
  third="EECS 563: Intro to Communication Networks"
  thirdDesc="An introduction to the principles used in communication networks is given in this course. Topics include a discussion of the uses of communications networks, network traffic, network impairments, standards, layered reference models for organizing network functions. Local Area Network technology and protocols are discussed. Link, network, transport layer protocols, and security are introduced. TCP/IP networks are stressed. VoIP is used as an example throughout the course. Basic concepts of network performance evaluation are studied, both analytical and simulation techniques are considered."
  />
</Grid>
<Grid container item xs={12} spacing={3}>
  <FormRow
  first="EECS 560: Data Structures"
  firstDesc="Data abstraction and abstract data types. Topics include the design and implementation of dictionary, priority queues, concatenated queue, disjoint set structures, graphs, and other advanced data structures based on balanced and unbalanced tree structures. Special emphasis will be placed on the implementations of these structures and their performance tradeoffs. Both asymptotic complexity analysis and experimental profiling techniques will be introduced. Labs will be used to provide students with hands-on experience in the implementations of various abstract data types and to perform experimental performance analysis."
  second="EECS 665: Compiler Construction"
  secondDesc="Compilation of simple expressions and statements. Organization of a compiler including symbol tables, lexical analysis, syntax analysis, intermediate and object code generation, error diagnostics, code optimization techniques and run-time structures in a block-structured language such as PASCAL or C. Programming assignments include using tools for lexer and parser generator, and intermediate , and object code generation techniques. Laboratory exercises will provide hands-on experience with the tools and concepts required for the programming assignments."
  third="EECS 662: Programming Languages"
  thirdDesc="Formal definition of programming languages including specification of syntax and semantics. Simple statements including precedence, infix, prefix, and postfix notation. Global properties of algorithmic languages including scope of declaration, storage allocation, grouping of statements, binding time of constituents, subroutines, coroutines, and tasks. Run-time representation of program and data structures."
  />
</Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
      <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{className}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {desc}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
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
