// Importing the dependencies 
import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing the right and left arrow icons from react-icons

// Calling the functions set up in the portfolio component
const Modal =({
    clickedImg,
    setClickedImg,
    handleLeft,
    handleRight
}) => {
    // handle click function - this dismisses the modal when the user clicks the 'X' button and when the user clicks outside the modal
    const handleClick = (e) => {
        if(e.target.classList.contains('dismiss')){
            setClickedImg(null)
        } 
}
// return the modal component - this is the modal that appears when the user clicks on an image in the portfolio
  return (
    <>
    {/* Creating the overlay that will hold the image */}
        <div className="overlay dismiss" onClick={handleClick}>
            {/* The image that will appear in the modal called from the clickedImg and json data set previously */}
            <img src={clickedImg} alt="Enlarged" className='bigPic' />
            {/* The close button */}
            <span className="dismiss" onClick={handleClick}>X</span>
            {/* The left and right arrows */}
            <div onClick={handleLeft} className="overlay-arrow_left">
                <FaArrowLeft className='arrow-left' />
            </div>
            <div onClick={handleRight} className="overlay-arrow_right">
                <FaArrowRight className='arrow-right'/>
            </div>
        </div>
    </>
  )
}
// Exporting the Modal component
export default Modal