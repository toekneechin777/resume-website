import React from "react";
import "./research.css";
import Project from "./project.js";

import swarm from './projects/research/robotswarm.jpg';
import swarm_info from "./projects/research/swarm_info.md";

import margaret_acl from './projects/margaret/twitter-gender.png';

import margaret_sbp from './projects/margaret/sbp.png';

export default function Research() {
  return (
    <div className="research_container">
      <h1> <b>Research Projects</b></h1>
      <Project image={margaret_acl} info={'https://resume-website-mds.s3.amazonaws.com/projects/margaret/acl2019_info.md'}/>
      <Project image={margaret_sbp} info={'https://resume-website-mds.s3.amazonaws.com/projects/margaret/sbp2019_info.md'}/>
      <Project image={swarm} info={'https://resume-website-mds.s3.amazonaws.com/projects/research/swarm_info.md'}/>
    </div>
  )
}
