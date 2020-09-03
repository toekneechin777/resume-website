import React from "react";
import "./blog.css";
import BlogPost from "./blogpost.js";
import BlogDetails from './blogdetails.js';

import bp1 from "./blogs/blogpost1.md";
import bp1img from "./blogs/blogpost1.png";

import bp2 from "./blogs/blogpost2.md";

import {StaticRouter as Router,
  Switch,
  Route} from "react-router-dom";

export default function Blog() {

  return (
    <div className="blog_container">
    <Router>
      <Switch>
        <Route exact path ="/blog">
          <h1><b> Blog </b></h1>
          <BlogPost md={bp1} image={bp1img} id={'blogpost1'}/>
        </Route>
        <Route path="/blog/:id" component={BlogDetails}/>
      </Switch>
    </Router>
    </div>
  )
}
