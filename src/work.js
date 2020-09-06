import React from "react";
import ExperienceBox from "./experience.js"
import "./work.css"

import keller from "./experience/umn/keller.jpg"
import optum1 from "./experience/optum/optum_place.jpg"
import optum2 from "./experience/optum/optum_place2.jpg"
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
      <ExperienceBox title={amazontitle}
                      image={amazon}
                      left_info={'https://resume-website-mds.s3.amazonaws.com/amazon/amazon_leftinfo.md'}
                      right_info={'https://resume-website-mds.s3.amazonaws.com/amazon/amazon_rightinfo.md'}/>
      <ExperienceBox title={sifttitle}
                      image={sift}
                      left_info={'https://resume-website-mds.s3.amazonaws.com/sift/sift_leftinfo.md'}
                      right_info={'https://resume-website-mds.s3.amazonaws.com/sift/sift_rightinfo.md'}/>
      <ExperienceBox title={optum2title}
                      image={optum2}
                      left_info={'https://resume-website-mds.s3.amazonaws.com/experience/optum/optum2_leftinfo.md'}
                      right_info={'https://resume-website-mds.s3.amazonaws.com/experience/optum/optum2_rightinfo.md'}/>
      <ExperienceBox title={umntatitle}
                      image={keller}
                      left_info={'https://resume-website-mds.s3.amazonaws.com/experience/umn/umnta_leftinfo.md'}
                      right_info={'https://resume-website-mds.s3.amazonaws.com/experience/umn/umnta_rightinfo.md'}/>
      <ExperienceBox title={optum1title}
                      image={optum1}
                      left_info={'https://resume-website-mds.s3.amazonaws.com/experience/optum/optum1_leftinfo.md'}
                      right_info={'https://resume-website-mds.s3.amazonaws.com/experience/optum/optum1_rightinfo.md'}/>
    </div>
  )
}
