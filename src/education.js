import React from "react";
import ExperienceBox from "./experience.js"
import "./education.css"

import umn from "./experience/umn/umn.png"
import umn_leftinfo from "./experience/umn/umn_leftinfo.md"
import umn_rightinfo from "./experience/umn/umn_rightinfo.md"

import wayzata from "./experience/wayzata/wayzata.jpg"
import wayzata_leftinfo from "./experience/wayzata/wayzata_leftinfo.md"
import wayzata_rightinfo from "./experience/wayzata/wayzata_rightinfo.md"

export default function Education() {
  const umntitle = 'Bachelor of Science: University of Minnesota';
  const wayzatatitle = 'High School: Wayzata High School';
  return (
    <div className="education_container">
      <h1> <b>Education Experience</b> </h1>
      <ExperienceBox title={umntitle} image={umn} left_info={umn_leftinfo} right_info={umn_rightinfo}/>
      <ExperienceBox title={wayzatatitle} image={wayzata} left_info={wayzata_leftinfo} right_info={wayzata_rightinfo}/>
    </div>
  )
}
