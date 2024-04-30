import React from "react";
import "./Home.css";

import Typewriter from "typewriter-effect";

import CV from "./CV.pdf";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hello World I'm a</h1>
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

        <div className="buttons">
          
          <button className="enquiries">
            Email Enquiries
          </button>

            <button className="downloadCV">
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
