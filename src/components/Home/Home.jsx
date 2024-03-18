import React from 'react' // Importing React dependencies  
import LOGOC from '../../assets/images/logoc.png'; // Importing the logo image. this is used as the capital C in the name animation 
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom to move between pages
import './home.scss'; // Calling the styles for the home page - Created in sass
import { useEffect, useState } from 'react'; // Importing useEffect and useState for the animation of the name 
import AnimatedLetters from '../animatedLetters/AnimatedLetters'; // Importing the animated letters component 


import ParticlesComponent from '../particles/Particles'; // Importing the particles component

import { motion as m } from 'framer-motion'; // Importing the motion component from framer-motion

//  Creating the Home component
const Home = () => {
  // setting the state for the letter class - this is used to animate the text in the home page span tags further down
  const [letterClass, setLetterClass] = useState('text-animate')
  // setting the name array 
  const nameArray = [ 'h', 'r', 'i', 's', ' ', ' ', 'D', 'i', 'c', 'k', 's', 'o', 'n']
  
// The animated letters with dely of 4 seconds then the class is changed to text-animate-hover
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
// starting the return of the home component
  return (
    <>


  
{/* Home page container  */}

  <m.div className="slide-in"  initial={{scaleY:1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration:1, ease:"easeIn"}} ></m.div>
  {/* The particles component */}
  <ParticlesComponent />
      <div className="container home-page"   >
           
        {/* Text container - that has the same animation and hover effect */}
        <div className="text-zone">
   
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* Logo - this has a z rotation effect that spins on page load  */}
            <img
              src={LOGOC}
              alt="Initial logo"
            />
            {/* The animation components for the letters.  */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />            
          </h1>
          {/* The sub heading */}
          <h2>Digital Artist / 3d Renderer / Web Designer / Comic Colourist</h2>
          <br />
          {/* The CTA button -directs user to the contact page */}
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>     
      </div>
      
    </>
    
  )
}
// exporting the Home component
export default Home