import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,
         faTwitter,
         faGithub
       } from "@fortawesome/free-brands-svg-icons";
import cv from "./CV.pdf"

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.linkedin.com/in/anthony-chen-38baa1143"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://twitter.com/TToekneechin" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://github.com/toekneechin777" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href={cv} className="resume social">
        CV
      </a>
    </div>
  )
}
