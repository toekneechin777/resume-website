import React from "react";
import "./industry.css";
import Project from "./project.js";

import optum_gdb from "./projects/industry/optum_graphdb.png";
import optum_gdbinfo from "./projects/industry/optum_graphdb_info.md";

import margaret from "./projects/margaret/margaret.png";
import margaret_info from "./projects/margaret/margaret_info.md";

import tybalt from "./projects/industry/tybalt.png";
import tybalt_info from "./projects/industry/tybalt_info.md";


export default function Industry() {
  return (
    <div className="industry_container">
      <h1><b>Industry Projects</b></h1>
      <Project image={margaret} info = {'https://resume-website-mds.s3.amazonaws.com/projects/margaret/margaret_info.md'}/>
      <Project image={tybalt} info={'https://resume-website-mds.s3.amazonaws.com/projects/industry/tybalt_info.md'}/>
      <Project image={optum_gdb} info={'https://resume-website-mds.s3.amazonaws.com/projects/industry/optum_graphdb_info.md'}/>
    </div>
  )
}
