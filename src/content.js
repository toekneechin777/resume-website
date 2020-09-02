import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SocialFollow from "./SocialFollow";
import NavBar from "./NavBar";
import SlideShow from "./slideshow";
import About from "./about";
import Education from "./education";
import Work from "./work";
import Research from "./research";
import Personal from "./personal";
import Industry from "./industry";
import Blog from "./blog";
import "./index.css";

export default function Content() {
  return (
    <div>
      <div className="header">
    		<div className="head_container">
    			<div className="head">
            <h1>Anthony L Chen</h1>
    			</div>
          <SocialFollow/>
    		</div>
      </div>
      <NavBar/>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <SlideShow/>
            </Route>
            <Route path="/aboutme">
              <About/>
            </Route>
            <Route path="/education">
              <Education/>
            </Route>
            <Route path="/work">
              <Work/>
            </Route>
            <Route path="/research">
              <Research/>
            </Route>
            <Route path="/personal">
              <Personal/>
            </Route>
            <Route path="/industry">
              <Industry/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
