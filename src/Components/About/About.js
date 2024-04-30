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
              With five years of programming experience, I bring a diverse skill set and eagerness to excel. 
              Proficient in problem-solving, communication, and coordination, I strive for optimal solutions. My expertise spans copywriting, sales, marketing, lead generation, graphic and web design, and programming. 
              Articulate and empathetic, I effectively understand and address user needs and pain points. Known for attention to detail and a commitment to intuitive user experiences, I thrive in fast-paced environments with tight deadlines.            
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default About;
