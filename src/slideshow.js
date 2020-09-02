import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import italypic from './italyrobot&ml.jpg';
import swarm from './projects/research/robotswarm.jpg';
import hq2 from './hq2.jpg';

export default function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home">
      <div className="recent-events">
        <div className="recent-events-title"> Recent Events </div>
        <Carousel
          activeIndex={index}
          direction='right'
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={hq2}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Started a New Job</h3>
              <p>
              As of August 2020, I started a new job as a Machine Learning Associate
              at Amazon Web Services. Excited to expand my knowledge as I build & develop ML solutions at Amazon's HQ2.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
             src={italypic}
             alt="First slide"
            />
            <Carousel.Caption>
              <h3>Toured ML/AI Research Across Italy</h3>
              <p>I was fortunate enough to participate in a study abroad in Italy to study Machine Learning and Robotics at some of the most prestigious universities in Italy. I also got to attend the IEEE 2018 International Symposium on Circuits & Systems in Florence while I was there. </p>
            </Carousel.Caption>
          </Carousel.Item>
         <Carousel.Item>
          <img className="d-block w-100"
           src={swarm}
           alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Published Paper on Swarm Robotics Energy Efficiency</h3>
            <p>Published a Paper at 2019 AAMAS in Montreal, CA for a new energy efficiency strategy in swarm robotics.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      <div className="tech-slideshow">
        <div className="mover-1">
        </div>
      </div>
    </div>
  )
}
