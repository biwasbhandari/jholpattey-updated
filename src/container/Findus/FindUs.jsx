/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsWhatsapp } from 'react-icons/bs';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{color:'black'}}>Baneshowr 10, Devkota Sadak</p>
        <p className="p__opensans" style={{display:'flex',alignItems:'center',gap:'4px', color:'black'}}><BsWhatsapp/> +977 9761767215</p>
        <p className="p__cormorant" style={{ color: 'black', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans" style={{color:'black'}}>Sun - Thu: 08:30 am - 11:00 pm</p>
        <p className="p__opensans" style={{color:'black'}}>Fri - Sat: 08:30 am - 01:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}> <a href="https://www.google.com/maps/place/Jholpattey/@27.6919908,85.3360839,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b5d720516d:0x1f21c24c0b18fe47!8m2!3d27.6919908!4d85.3360839!16s%2Fg%2F11v0lbjnzs?entry=ttu" rel='noreferrer' target='_blank'>Visit Us</a> </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;