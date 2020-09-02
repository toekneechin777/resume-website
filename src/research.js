import React from "react";
import "./research.css";
import Project from "./project.js";

import swarm from './projects/research/robotswarm.jpg';
import swarm_info from "./projects/research/swarm_info.md";

import margaret_acl from './projects/margaret/twitter-gender.png';
import margaret_aclinfo from './projects/margaret/acl2019_info.md';

import margaret_sbp from './projects/margaret/sbp.png';
import margaret_sbpinfo from './projects/margaret/sbp2019_info.md';

export default function Research() {
  return (
    <div className="research_container">
      <h1> <b>Research Projects</b></h1>
      <Project image={margaret_acl} info={margaret_aclinfo}/>
      <Project image={margaret_sbp} info={margaret_sbpinfo}/>
      <Project image={swarm} info={swarm_info}/>
    </div>
  )
}
