import React from "react";
import ExperienceBox from "./experience.js"
import "./education.css"

import umn from "./experience/umn/umn.png"

import wayzata from "./experience/wayzata/wayzata.jpg"
import wayzata_leftinfo from "./experience/wayzata/wayzata_leftinfo.md"
import wayzata_rightinfo from "./experience/wayzata/wayzata_rightinfo.md"

export default function Education() {
  const umntitle = 'Bachelor of Science: University of Minnesota';
  const wayzatatitle = 'High School: Wayzata High School';
  return (
    <div className="education_container">
      <h1> <b>Education Experience</b> </h1>
      <ExperienceBox title={umntitle} image={umn}
        left_info={'https://resume-website-mds.s3.amazonaws.com/experience/umn/umn_leftinfo.md'}
        right_info={'https://resume-website-mds.s3.amazonaws.com/experience/umn/umn_rightinfo.md'}/>
      <ExperienceBox title={wayzatatitle} image={wayzata}
        left_info={'https://resume-website-mds.s3.amazonaws.com/experience/wayzata/wayzata_leftinfo.md'}
        right_info={'https://resume-website-mds.s3.amazonaws.com/experience/wayzata/wayzata_rightinfo.md'}/>
    </div>
  )
}
