import React from 'react'

import './Contact.css'  

const Contact = () => {
  return ( 
        // Contains entire contact section  
        <div id='contact' class="container contact-section">

            <div class="container contact-content">
                <div className='text-center'>
                    <h3>Contact Me</h3>
                </div>
            
                <form>
                <div class="contact-form">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                </div>

                <div class="contact-form">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                </div>

                <div class="contact-form">
                    <label for="job-type">Job Type:</label>
                    <select className='drop-list'>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Contract</option> 
                     </select>
                </div>

                <div class="contact-form">
                    <label for="message">Message:</label>
                    <textarea class="form-message" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>

                <div className='button-submit'>
                    <button type="submit" class="submit btn btn-primary">Submit</button>
                </div>

                
                </form>
            </div>
        </div>
  )
}

export default Contact