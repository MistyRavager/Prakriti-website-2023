import React from 'react'
import './ContactPage.css'
import {BiLogoGmail} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import { BiLogoMessenger } from "react-icons/bi";


function ContactPage() {
  return (
    <>
<div className="contactPage">
<section id='contact'>
  <h2>
    Contact Us
  </h2>


  <div className="container contact_container">
    <div className="contact_options">
      <article className='contact_option'>
      <BiLogoGmail className='contact_option-icon' />
        <h4>Email</h4>
        <h5>epoch@gmail.com</h5>
        <a rel="noreferrer" href="mailto:" target="_blank">Send a mail</a>
      </article>

      <article className='contact_option'>
      <BiLogoMessenger className='contact_option-icon' />
        <h4> Messenger </h4>
        <h5>Epoch</h5>
        <a href="https://m.me/siddhart.kommu" rel="noreferrer"  target="_blank">Send a Message</a>
      </article>


      <article className='contact_option'>
      <BsInstagram className='contact_option-icon'/>
        <h4>Instagram</h4>
        <h5>Epoch</h5>
        <a href="/" rel="noreferrer" target="_blank">Text me here</a>
      </article>
    </div>
  

  <form action="" className='page'>
    <input type="text" name="name" id="" placeholder='Your Full name' required />

    <input type="email" name="email" id="" placeholder='Your email' required />

    <textarea name="message" id=""  rows="17" placeholder='Your message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
  
  </div>

   </section>
   </div>
    </>
  )
}

export default ContactPage
