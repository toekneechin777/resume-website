import React from "react";
import ExperienceBox from "./experience.js"
import "./work.css"

import keller from "./experience/umn/keller.jpg"
import umnta_leftinfo from "./experience/umn/umnta_leftinfo.md"
import umnta_rightinfo from "./experience/umn/umnta_rightinfo.md"

import optum1 from "./experience/optum/optum_place.jpg"
import optum1_leftinfo from "./experience/optum/optum1_leftinfo.md"
import optum1_rightinfo from "./experience/optum/optum1_rightinfo.md"

import optum2 from "./experience/optum/optum_place2.jpg"
import optum2_leftinfo from "./experience/optum/optum2_leftinfo.md"
import optum2_rightinfo from "./experience/optum/optum2_rightinfo.md"

import sift from "./sift.jpg"
import amazon from "./amazon_place.jpg"

export default function Work() {
  const optum1title = 'Optum Tech: Big Data Engineer Intern';
  const umntatitle = 'University of Minnesota: CS Teaching Assistant';
  const optum2title = 'Optum Tech: AI/ML Research & Dev Intern';
  const sifttitle = 'SIFT: ML/NLP Research Intern';
  const amazontitle = 'Amazon Web Services: Machine Learning Associate';
  return (
    <div className="work_container">
      <h1> <b> Work Experience </b> </h1>
      <ExperienceBox title={amazontitle} image={amazon}/>
      <ExperienceBox title={sifttitle} image={sift}/>
      <ExperienceBox title={optum2title}
                      image={optum2}
                      left_info={optum2_leftinfo}
                      right_info={optum2_rightinfo}/>
      <ExperienceBox title={umntatitle}
                      image={keller}
                      left_info={umnta_leftinfo}
                      right_info={umnta_rightinfo}/>
      <ExperienceBox title={optum1title}
                      image={optum1}
                      left_info={optum1_leftinfo}
                      right_info={optum1_rightinfo}/>
    </div>
  )
}
