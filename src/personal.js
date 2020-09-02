import React from "react";
import "./personal.css";
import Project from "./project.js";

import stockai from "./projects/personal/stockai.png"
import stockai_info from "./projects/personal/stockai_info.md"

export default function Personal() {
  return (
    <div className="personal_container">
      <h1> <b>Personal Projects </b></h1>
      <Project image={stockai} info={stockai_info}/>
    </div>
  )
}
