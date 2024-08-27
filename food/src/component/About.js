import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroungImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
      
    <div className="about-section-container">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroungImage} alt="" />
    </div>
    <div className="about-section-text-container">
      <p className="primary-subheading">About</p>
      <h1 className="primary-heading">
        Food Is An Important Part Of A Balanced Diet
      </h1>
      <p className="primary-text">
      A balanced diet contains an adequate amount of all the nutrients required by the body to grow, remain healthy and be disease-free. In addition, a healthy, balanced diet provides the necessary energy requirement, protects against vitamin, mineral, and other nutritional deficiencies, and builds up immunity.
        {/* Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam. */}
      </p>
      <p className="primary-text">
        Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
        facilisis at fringilla quam.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button">
          <BsFillPlayCircleFill /> Watch Video
        </button>
      </div>
    </div>
  </div>

  );

};

export default About;