import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the Flavor of Innovation" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0", textTransform: "none" }}>
        Elevate your culinary experience with dishes that redefine tradition. Crafted with the freshest ingredients, 
        each bite is a testament to our passion for flavor. Discover the art of fine dining, where taste meets creativity.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.IMG} alt="header img" />
    </div>
  </div>
);

export default Header;
