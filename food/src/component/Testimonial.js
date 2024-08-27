import React from "react";
// import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic from "../Assets/RahulLogo.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
        
    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Testimonial</p>
      <h1 className="primary-heading">What They Are Saying</h1>
      <p className="primary-text">
      I'd be happy to help you with testimonials. Could you please provide more context about what specifically you'd like to know or do regarding testimonials? For example, are you looking to:

      </p>
    </div>
    <div className="testimonial-section-bottom">
      <img src={ProfilePic} alt="" />
      <p>
      - Write testimonials for a product or service? <br />
      - Collect testimonials from customers? <br />
      - Learn about the importance of testimonials in marketing? <br />
      - Understand how to effectively use testimonials on a website? <br />
        Once you clarify your needs, I can offer more targeted assistance.
      </p>
      <div className="testimonials-stars-container">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <h2>Rahul Kumar</h2>
    </div>
  </div>

  );

};

export default Testimonial;
