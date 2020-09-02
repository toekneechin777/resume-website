import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="profile_container">
      <div className="left_profile">
        <div className="my-pic">
          <img alt="profile pic" src="./profile.png"/>
        </div>

        <div className="prof-box">
          <p> <b>Position:</b> Machine Learning Developer, Researcher, Tech Enthusiast</p>
          <p> <b>Location:</b> DC Metro Area (NOVA) USA </p>
          <p> <b>Passion:</b> Artificial Intelligence, Machine Learning, and Data Science </p>
          <p> <b>Hobbies:</b> Exploring Food from Different Cultures, Scifi/Superhero TV Shows & Movies, and Long Walks playing Pokemon Go</p>
        </div>

      </div>

      <div className="right_profile">
        <h1><b> Welcome </b></h1>
        <p> Hello World! Welcome to my Website! <br/><br/>
            I am mainly using this website to create a self portfolio of my experiences and projects
            and act as kind of like a logbook of thoughts...
            <br/><br/>
            As you might tell as you look around, my main interests are in the field of Computer Science
            specifically in the domains of Artificial Intelligence and Machine Learning.
            I am particularly passionate about these areas because of the applications to various fields and diverse set problems it can tackle.
            If you share any similar interests or anything tech related feel free to follow..
            <br/><br/><br/>
            Cheers,<br/>
            Anthony Chen
        </p>


      </div>
    </div>
  )
}
