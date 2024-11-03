import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Social Media" />
      <h2 className="headtext__cormorant">Subscribe To Our Social Media handles</h2>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    {/* <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div> */}
    <div className="app__newsletter">
    <div className="app__newsletter-heading">
      {/* <h2>Follow Us on Social Media</h2> */}
    </div>
    <div className="app__newsletter-input flex__center">
      <a href="facebook.com/p/Wok-and-Fire-100070460065791/" target="_blank" rel="noopener noreferrer" className="app__social-card">
        <div className="app__social-card-content">
          <h3>Facebook</h3>
          {/* <p>Follow us on Facebook</p> */}
        </div>
      </a>
      <a href="https://www.instagram.com/wokandfireuk?igsh=OGdka2s3dWV0dTNm" target="_blank" rel="noopener noreferrer" className="app__social-card">
        <div className="app__social-card-content">
          <h3>Instagram</h3>
          {/* <p>Follow us on Instagram</p> */}
        </div>
      </a>
      <a href="https://www.tiktok.com/@wokandfirehalal" target="_blank" rel="noopener noreferrer" className="app__social-card">
        <div className="app__social-card-content">
          <h3>TikTok</h3>
          {/* <p>Follow us on TikTok</p> */}
        </div>
      </a>
    </div>
  </div>
  
  </div>
);

export default Newsletter;
