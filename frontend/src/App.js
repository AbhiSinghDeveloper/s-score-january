//import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./container/home";
import About from "./pages/about";
import Profile from "./pages/Profile";
import Index from "./container/index";
import Declaration from './component/Declaration';
import Landing from "./component/Landing";
import FinalScore from "./component/FinalScore";
import ScoreA from "./component/ScoreA";
import ScoreC from "./component/ScoreC";
import ScoreB from "./component/ScoreB";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import './component/Navbar.css';
import Preview from "./component/Preview";

function App() {
  return(
  
    
    <Router>
    <Navbar/>
      <Switch>
     <Route exact path="/" component={Landing} /> 
          <Route exact path="/Singup" component={Signup} /> 
         <Route exact path="/login" component={Login} /> 
         <Route exact path="/declaration" component={Declaration} />
         <Route path="/about" component={About} />
         <Route path="/profile" component={Profile} />
         <Route path="/register" component={Index} />
         <Route exact path="/fill-a" component={ScoreA} />
         <Route exact path="/fill-b" component={ScoreB} />
         <Route exact path="/fill-c" component={ScoreC} />
         <Route path="/preview" component={Preview} />
         <Route exact path="/finalscore" component={FinalScore} />
      </Switch>
    </Router>
  );
}
export default App;
