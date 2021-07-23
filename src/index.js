import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Resume from './Resume/Resume'
import HomePage from './HomePage'
import { BrowserRouter ,Switch,Route} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
    <Route exact path="/">
      <HomePage/>
    </Route>
  <Route path="/Resume">
    <Resume />
  </Route>
  <Route exact path="/github" component={() => {
     window.location.href = 'https://github.com/hunter0713';
     return null;
}}
  />
  <Route exact path="/githubUpNext" component={() => {
     window.location.href = 'https://github.com/giangpro93/UpNext/tree/main/app/ui';
     return null;
}}
  />
  <Route exact path="/githubSquadUp" component={() => {
     window.location.href = 'https://github.com/hunter0713/Squadup_Android_App';
     return null;
}}
  />
  <Route exact path="/githubStudentFirst" component={() => {
     window.location.href = 'https://github.com/hunter0713/StudentFirst-EECS_647-Project-';
     return null;
}}
  />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
