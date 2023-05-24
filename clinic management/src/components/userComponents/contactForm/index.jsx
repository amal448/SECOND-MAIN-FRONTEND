import React, { useState } from 'react'

import './style.scss';

function ContactForm() {
   
  
    return (
        <form className='contact-form'>
            <div className="form-group">
                <div className="form-control">
                    <label htmlFor="first-name">firstname</label>
                    <input type="text" name="firstName" id="first-name" />
                </div>
                <div className="form-control">
                    <label htmlFor="last-name">lastname</label>
                    <input type="text" name="lastName" id="last-name" />
                </div>
            </div>
            <div className="form-group">
                <div className="form-control">
                    <label htmlFor="mobile">mobile</label>
                    <input type="text" name="phone" id="mobile" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" />
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="message">message</label>
                <textarea rows={6} type="text" name="message" id="message" />
            </div>
            <input type="button" value="send" />
        </form>
    )
}

export default ContactForm