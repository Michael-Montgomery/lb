import React, { useState } from 'react';
import Header from '../../components/header/header';
import './contact.css';
import Footer from '../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';





const Contact = () => {


const navigate = useNavigate();


    const [showForm, setShowForm] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();
      setShowForm(false);
        emailjs.sendForm(
          'service_l3i6sll',
          'template_gc0rz97',
          e.target,
          '8zMjLYXj4OH59op-A'
        )
        .then(() => {
          setTimeout(() => {
            navigate('/');
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
      };





    return (


        <div className='contact-page-wrapper'>
            <Header />
           <h1>{showForm ? 'We would love to hear from you!' : 'Thank you for your message!'}</h1>
           {
            showForm &&  <form onSubmit={sendEmail} className='contact-form-wrapper'>
            
           <div>
               {/* <label htmlFor="name">Name:</label> */}
               <input type="text" id="name" name="name" placeholder='Name'/>
           </div>
           <div>
               {/* <label htmlFor="email">Email:</label> */}
               <input type="email" id="email" name="email" placeholder='Email'/>
           </div>
           <div>
               {/* <label htmlFor="message">Message:</label> */}
               <textarea id="message" name="message" placeholder='Your message here...'></textarea>
           </div>
           <button type="submit">Submit</button>
       </form>
           }
            <div className='social-media-links-wrapper'>
                <ul>
                    <li>
                        <div>
                            <a href="https://www.facebook.com/LBTile/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        </div>
                        </li>
                        <li>
                        <div>
                            <a href="mailto:lbtile@comcast.net" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                        </div>
                        </li>   
                        <li>
                        <div>
                            <a href="tel:+14105987485" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;