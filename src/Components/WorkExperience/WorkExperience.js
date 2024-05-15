import React from "react";
import "./WorkExperience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SiNucleo } from "react-icons/si";
// import { FcBusinessman, FcSalesPerformance, FcRating } from "react-icons/fc";
// import { IoIosNuclear } from "react-icons/io";
// import { IoNuclearOutline } from "react-icons/io5";



 

const WorkExperience = () => {
  const workExperienceData = [
    {
      companyName: "EasierEdits",
      position: "Entrepreneur",
      skills: [
        "Graphic Design", 
        "Marketing", 
        "Analytics",
        "Sales", 
      ],
      info: `Skilled in initiating cold calls and gathering information to engage
            potential customers, leading to successful sales appointments
            Proficient in WordPress and plugin utilization for customized website
            development aligned with client preferences.
            Experienced in analyzing Google tools such as Analytics, Console,
            Keywords, and AdSense to enhance marketing strategies. 
            `,
      year: "2021 February -2022 January",
      icon: <SiNucleo />,
      backgroundBox: 'linear-gradient(270deg, rgb(18,144,150) 51%, rgb(17,185,110) 100%)',
      skillAndIconColor: 'rgb(14, 127, 156)',
      color: 'white', 
      hover: 'rgb(18,144,150)'
    },
    {
      companyName: "Prosperity Trading Academy",
      position: "Sales Representative",
      skills: [
        "Content Creation", 
        "Communication", 
        "Negotiations",
        "Sales"
      ],
      info: "d",
      year: "2022 February - 2023 January",
      icon: <SiNucleo />, 
      backgroundBox: 'linear-gradient(94deg, rgb(1,1,1) 25%, rgb(208,213,35) 75%)',
      skillAndIconColor: 'rgb(1,1,1)',
      color: 'white', 
      hover: 'rgb(208,213,35)'
    },
    {
      companyName: "Somila Naturals",
      position: "Social Media and Website Manager",
      skills: [
        "Web Development",
        "Content Creation",
        "Digital Marketer",
        "Brand Representative",
      ],
      info: "d",
      year: "2023 March - 2024 April",
      icon: <SiNucleo />,
      backgroundBox: 'linear-gradient(94deg, rgb(127, 21, 192) 25%, rgb(221, 7, 7) 75%)',
      skillAndIconColor: 'rgb(221, 7, 7)',
      color: 'white', 
      hover: 'rgb(127, 21, 192)'
    },
  ];

  return (
    // Contains entire work experience section
    <div id="experience" className="container work-experience-section">
      
      {/* Ensures it is a row and contains info */}
      <div className="container work-experience-content">
        <div className="section-title">
          <h4>Work Experience</h4>
          <span className="underline"></span>
        </div>

        {/* REFER TO REACT VERTICAL TIMELINE DOCUMENT */}

        <VerticalTimeline lineColor='aqua'>
          {workExperienceData.map((item, index) => (
            <>
              <VerticalTimelineElement
                // The area containing the info
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: item.backgroundBox, color: "#fff"
                }}

                // The arrow pointing towards the icon
                contentArrowStyle={{
                  borderRight: `7px solid ${item.skillAndIconColor}`,
                }}
                date={item.year}
                dateClassName='date' 
                iconStyle={{ background: item.skillAndIconColor, color: "#fff" }}
                icon={item.icon}
                key={index}
                
              >
                <div className="inside-info">
                    <h3 className="vertical-timeline-element-title">
                    {" "}{item.companyName}{" "}
                    </h3>
                    <br />

                    <h4 className="vertical-timeline-element-subtitle">
                    {" "}{item.position}{" "}
                    </h4>
                    <br />

                    <div className="row">
                    {item.skills.map((skill, index) => (
                        // <div 
                        //  className="skill col-xl-4 col-lg-4 col-md-6 col-sm-12" 
                        //   key={index}
                        //   style={{
                        //       background: item.skillAndIconColor, 
                        //       color: item.color,
                        //       hover: item.hover
                        //     }}
                        // >
                        <div 
                         className="skill" 
                          key={index}
                          style={{
                              background: item.skillAndIconColor, 
                              color: item.color,
                              hover: item.hover
                            }}
                        >
                        {skill}
                        </div>
                    ))}
                    </div>

                    <p>{item.info}</p>
                </div>
              </VerticalTimelineElement>
            </>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
