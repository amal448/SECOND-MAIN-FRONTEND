import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import siteLogo from './../../../assets/svg/site-logo.svg';
import emailLogo from './../../../assets/svg/email.svg'
import locationLogo from './../../../assets/svg/location-arrow.svg'
import phoneLogo from './../../../assets/svg/phone-alt.svg'

import './style.scss'

function Footer() {

  return (
    <>
      <div className='footer'>
        <ul className='site-name-and-logo'>
          <li><img src={siteLogo} alt="" /><h1>Skin Care</h1></li>
        </ul>
        <ul className='quick-links'>
          <li><h2>Quick Links</h2></li>
          <li>Home</li>
        <li>
           Appointment
          </li>
          <li>
            Services
          </li>
          <li>
        About Us
          </li>
          <li>
            Contact US
          </li>
        </ul>
        <ul className='social-media-links'>
          <li><img src={emailLogo} alt='' /><span>skincare@gail.com</span></li>
          <li><img src={locationLogo} alt='' /><span>kerala kochi</span></li>
          <li><img src={phoneLogo} alt='' /><span>2342-2332-32</span></li>
        </ul>
      </div>
      <div className="copyright">
        <a href="">Copy right@skincare</a>
      </div>
    </>

  )
}
export default Footer