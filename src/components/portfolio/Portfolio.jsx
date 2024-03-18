// importing all the dependencies, the scss file and the json file
import React from 'react'
import data from './gallery.json' // holds the data for the images in the portfolio
import './portfolio.scss'
import { useState, useEffect } from 'react' // importing useState and useEffect from react for the button interactions
import Modal from './Modal' // linking the modal component
// importing the fade animation from react-awesome-reveal. reveals the images in a cascade delay effect
import Fade from 'react-awesome-reveal'; 

import { motion as m } from 'framer-motion'; // Importing the motion component from framer-motion
// Start of the Portfolio component
function Portfolio(){
    // setting the state for the clicked image and the current index
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
// add the handleClick function - this handles the click events for the images 
    const handleClick = (item,index) => {
        setCurrentIndex(index);
        setClickedImg(item.image);
    }
    // Handle right function
    const handleRight = () =>{
        const totalLength = data.length;
        if (currentIndex + 1 >= totalLength) {
          setCurrentIndex(0);
          const newUrl = data[0].link;
          setClickedImg(newUrl);
          return;
        }
        // if the current index is less than the total length of the data, then the current index is incremented by 1
        const newIndex = currentIndex + 1;
        const newUrl = data.filter((item) => {
          return data.indexOf(item) === newIndex;
        });
        // the new url is set to the new image
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };

// Handle left function
    const handleLeft = () =>{
        const totalLength = data.length;
        if(currentIndex === 0){
            setCurrentIndex(totalLength - 1)
            const newUrl = data[totalLength - 1].image;
            setClickedImg(newUrl)
            return;
        }
        // if the current index is equal to 0, then the current index is set to the total length of the data - 1
        const newIndex = currentIndex - 1;
        const newUrl = data.filter((item) =>{
            return data.indexOf(item) === newIndex
        })
        // the new url is set to the new image
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }
// setting the state for the letter class - this is used to animate the text in the portfolio span tags
    const [letterClass, setLetterClass] = useState('text-animate')
    // using the useEffect hook to animate the text in the portfolio span tags
    useEffect(() => {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
  return (
   
    // returning the portfolio component
    <>
      <m.div className="slide-in" initial={{scaleY:1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration:1, ease:"easeIn"}}></m.div>
        <div className="portfolio-container">
      {/* Header for the page this is animated similar to the other pages  */}
      <div className="text-zone">
        <span className={letterClass}>P</span>
        <span className={`${letterClass} _3`}>o</span>
        <span className={`${letterClass} _4`} >r</span>
        <span className={`${letterClass} _5`} >t</span>
        <span className={`${letterClass} _6`} >f</span>
        <span className={`${letterClass} _7`} >o</span>
        <span className={`${letterClass} _8`} >l</span>
        <span className={`${letterClass} _9`} >i</span>
        <span className={`${letterClass} _10`} >o</span> 
      </div>
      {/* Displaying the portfolio images */}
      <div className="portfolio-cards">
        {/* Mapping through the data and displaying the images, name and descriptions of the images */}            
        {data.map((item, index) => ( 
          // dislaying the images by mapping through the json file 
            <div key={index} className="portfolio-card" >
              {/* Calling the fade animation to cascade through the images at a delay of .25ms */}
               <Fade cascade damping={0.25} >
                {/* Displaying the images using the json data file the image also acts as a CTA for the larger "Modal Overlay" */}
                <img src={item.image} alt={item.name} onClick={() => handleClick(item, index)}  />
                {/* Text box for the Image name and descriptions  */}               
                <div className="text-descriptor">
                    <h3>{item.name}</h3>
                    <h5>{item.desc}</h5>
                </div>
                </Fade>
                {/* End of the fade animation */}
            </div> 
))}
{/* Setting the clikced image function to show the image and handlers - these are called within the ./Modal component */}
  {clickedImg && (
      <Modal clickedImg={clickedImg} handleRight={handleRight} setClickedImg={setClickedImg} handleLeft={handleLeft} />
  )}   
        </div>
        
    </div>
    
    </>

   
  )
}
// Exporting the Portfolio component 
export default Portfolio