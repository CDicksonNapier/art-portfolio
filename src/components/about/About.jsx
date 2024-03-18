// Import dependencies, main images and scss file
import React from 'react'
import './about.scss';
import RED from '../../assets/images/red.jpg';
import { useEffect, useState } from 'react'; // importing useEffect and useState from react for the animated letters 
// import AnimatedLetters from '../animatedLetters/AnimatedLetters';
// importing the fade animation from react-awesome-reveal. reveals the text and buttons in a delay effect
import {Fade } from 'react-awesome-reveal';

import { Link } from 'react-router-dom'; // Importing Link from react-router-dom to move between pages
import { motion as m } from 'framer-motion'; // Importing the motion component from framer-motion

// Start of the About component
const About = () => {
  // setting the state for the letter class - this is used to animate the text in the about page span tags
    const [letterClass, setLetterClass] = useState('text-animate')
      useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
  return (
    <>
    {/* About page container  */}
    <m.div className="slide-in" initial={{scaleX:1}} animate={{scaleX:0}} exit={{scaleX:0}} transition={{duration:1, ease:"easeIn"}}></m.div>
      <div className="container about-page">
        {/* Text container - that has the same animation and hover effect */}
        <div className="text-zone">
          <h1>
            <span className={letterClass}>A</span>
            <span className={`${letterClass} _1`}>l</span>
            <span className={`${letterClass} _2`}>l</span>
            <span className={`${letterClass} _3`}> </span>
            <span className={`${letterClass} _4`}>A</span>
            <span className={`${letterClass} _5`}>b</span>
            <span className={`${letterClass} _6`}>o</span>
            <span className={`${letterClass} _7`}>u</span>
            <span className={`${letterClass} _8`}>t</span>
            <span className={`${letterClass} _9`}> </span>
            <span className={`${letterClass} _10`}>M</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>!</span>
          </h1>
          {/* Fade animation for the text - comes in from the left  */}
          <Fade direction="left" triggerOnce>
          <h5>Hi thanks for visiting my portfolio, I’m Chris a mixed media artist. I have decided to redo this portfolio page using the skills and tools I have learned from my 4 years of college and university. I work with a mixture of tools from photoshop to 3ds max to create art. Over the course of my life, I have always had a deep love for art and mostly worked with paper and pencil to draw and create comics. It wasn’t until my 20’s I discovered photoshop and my eyes were opened to a world of possibilities. College showed me how much I can push my self with my art and I started to dabble in 3d rendering and animation as well as photomanipulation. </h5>
          </Fade>
          {/* Fade animation for the buttons - slides from the bottom */}
          <Fade direction="up" triggerOnce delay={"150"}>    
          <div className="button-holder">
            {/* Links to the portfolio and contact page  */}
            <Link to='/portfolio' className="portfolio-btn">Portfolio</Link>
            <Link to="/contact" className="getintouch-btn">Get Intouch</Link>
          </div>
          </Fade>
        </div>
        <Fade  triggerOnce>
          {/* Main Image  */}
        <div className="img-block">
          <img src={RED} alt="singer" />
        </div>
        </Fade>
      </div>
   
  </>
  )
}
// Export the about component
export default About