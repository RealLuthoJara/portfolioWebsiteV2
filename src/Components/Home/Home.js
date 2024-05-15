import React from "react";
import "./Home.css";

import Typewriter from "typewriter-effect";

import CV from "./CV.pdf";

const Home = () => {
  return (

    // Contains entire home section
    <div id="home" className="container home-section">

      {/* Contains info, buttons, text etc */}
      <div className="container home-content">

        {/* Hello World Heading */}
        <h1>Hello World I'm a</h1>

        {/* Typewriter effect for occupations */}
        <h2>
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Web Developer",
                "React Developer",
                "UI/UX Designer", 
                "Software Engineer",
              ],
              autoStart: true,
              loop: true, 
              pauseFor: 1000,
            }}
          />
        </h2>

        {/* Buttons for email enquiries and download CV */}
        <div className="buttons">
          
          <button className="home-link enquiries">
            Email Enquiries
          </button>

          <button className="home-link downloadCV">
          <a href={CV} download="Lutho Jara's CV" target="_blank" rel="noreferrer"> 
            Download CV
          </a>
          </button>

        </div>
      
      </div>
    </div>
  );
};

export default Home;
