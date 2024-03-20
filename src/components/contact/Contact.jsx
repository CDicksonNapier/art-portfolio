// Import dependencies, icons and scss file
import React from 'react'
import './contact.scss'
import { FaArtstation } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import  {useRef} from 'react'
// importing the email js library
import emailjs from '@emailjs/browser';
import Fade from 'react-awesome-reveal'; // importing the fade animation from react-awesome-reveal. reveals the text and buttons in a delay effect

import { motion as m } from 'framer-motion'; // Importing the motion component from framer-motion


// creating the contact component
const Contact = () => {
    const form = useRef();
    // send email event function
    const sendEmail = (e) => {
      // prevent the default action of the form - wont refresh the page after the form is submitted
      e.preventDefault();
      // send the form data to the emailjs service - this will be removed in the final version(for safety)
      emailjs.sendForm('service_doftflw', 'template_5xytbsj', form.current, 'g2mhZZgR1tSDrVVXW')
      alert('Your message has been sent! I will get back to you as soon as possible.')// Alert the user that the email has been sent
      // Reset the form after the email is sent
      e.target.reset()
    }

  return (
   <>
     <m.div className="slide-in" initial={{scaleY:1}} animate={{scaleY:0}} exit={{scaleY:0}} transition={{duration:1, ease:"easeIn"}}></m.div>
   <div className="text-zone">
    <h1>Contact Me</h1>
   </div>
   {/* Contact container - Holds the forms and social icons */}
   <div className="container contact__container">
    {/* Social media contact options - deviant, instagram and artstations links all load in a new tab */}
   <div className="contact__options">
    <Fade cascade delay={10} damping={.51} >
          <article className='contact__option'>
            <FaArtstation className='contact__option-icon' />
            <h4>ArtStation</h4>
            <h5>chrisdickson7</h5>
            <a href="https://www.artstation.com/chrisdickson7" target="__blank">ArtStation</a>
          </article>
          <article className='contact__option'>
            <FaDeviantart className='contact__option-icon' />
            <h4>DeviantArt</h4>
            <h5>eggman231</h5>
            <a href="https://www.deviantart.com/eggman231" target="__blank">DeviantArt</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>cdickson231</h5>
            <a href="https://www.instagram.com/cdickson231/" target="__blank">Instagram</a>
          </article>
          </Fade>
        </div>
        {/* Form to send an email  */}
   <form ref={form} onSubmit={sendEmail}>
          <h3>Send me a message</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" name="from_name" placeholder='Your Name' required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="from_email" placeholder='Your Email' required />
          <label htmlFor="message">Message:</label>
          <textarea name="Your Message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
   </div>
   
   </>
  )
}
// exporting the contact component
export default Contact