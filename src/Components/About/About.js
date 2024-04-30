import React from "react";
import "./About.css";
import ProfilePic from "../../Image/profilepic.JPG";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          
          <div className="about-image">
            <img src={ProfilePic} alt="Profile Pic" />
          </div>
        
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <h4>About Me</h4>
            <span className="underline"></span>
            <p>
              About Section  
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default About;
