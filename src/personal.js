import React from "react";
import "./personal.css";
import Project from "./project.js";

import stockai from "./projects/personal/stockai.png"

export default function Personal() {
  return (
    <div className="personal_container">
      <h1> <b>Personal Projects </b></h1>
      <Project image={stockai} info={'https://resume-website-mds.s3.amazonaws.com/projects/personal/stockai_info.md'}/>
    </div>
  )
}
