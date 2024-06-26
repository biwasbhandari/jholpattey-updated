/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { FiFacebook,  FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';



const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links" >
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" style={{color:'black'}}>Contact Us</h1>
        <p className="p__opensans" style={{color:'black'}}>Baneshowr 10, Devkota Sadak</p>
        <p className="p__opensans" style={{color:'black'}}>+977 9761767215</p>
        <p className="p__opensans" style={{color:'black'}}>+977 9702831598</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans" style={{color:'black'}}>&quot;Find Your Own Taste.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon'/>
        <div className="app__footer-links_icons" style={{color:'black'}}>
          <a href="https://www.facebook.com/profile.php?id=100063588315908" rel='noreferrer' target='_blank'><FiFacebook /></a>
          <a href="https://www.instagram.com/jholpattey_/" target='_blank' rel='noreferrer'><FiInstagram /></a>          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{color:'black'}}>Working Hours</h1>
        <p className="p__opensans" style={{color:'black'}}>Sunday-Thursday:</p>
        <p className="p__opensans" style={{color:'black'}}>08:00 am - 11:30 pm</p>
        <p className="p__opensans" style={{color:'black'}}>Friday-Saturday:</p>
        <p className="p__opensans" style={{color:'black'}}>08:00 am - 01:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{color:'black'}}>2024 Jholpattey. All Rights reserved.</p>
      <p className="p__opensans" style={{color:'black'}}>Developed by: <span style={{fontWeight:'bold', color:'black'}}><a href="https://biwasbhandari.com.np" rel='noreferrer' target='_blank'>Biwas Bhandari</a></span></p>
    </div>

  </div>
);

export default Footer;