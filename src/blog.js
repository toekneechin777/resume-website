import React from "react";
import "./blog.css";
import BlogPost from "./blogpost.js";
import BlogDetails from './blogdetails.js';

import bp1img from "./blogs/blogpost1.png";


import {HashRouter as Router,
  Switch,
  Route} from "react-router-dom";

export default function Blog() {

  return (
    <div className="blog_container">
    <Router>
      <Switch>
        <Route exact path ="/blog">
          <h1><b> Blog </b></h1>
          <BlogPost md={'https://resume-website-mds.s3.amazonaws.com/blogpost1.md'} image={bp1img} id={'blogpost1'}/>
        </Route>
        <Route path="/blog/:id">
          <BlogDetails md={'https://resume-website-mds.s3.amazonaws.com/blogpost1.md'}/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}
