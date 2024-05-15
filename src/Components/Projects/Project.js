import React, { useState } from 'react'
import './Project.css'

import ProSuite from './Screenshots/ProSuite.png';
import QRCode from './Screenshots/QRCode.png';

import { BsChevronUp, BsChevronDown } from "react-icons/bs";


const Project = () => {
    const projectData = [
        {
            projectName: 'ProSuite',
            pic: ProSuite,
            techUsed: [['HTML'], ['CSS'], ['JS'], ['Figma']],
            github: 'https://github.com/RealLuthoJara/prosuite',
            liveSite: 'https://realluthojara.github.io/prosuite/',
            info: 'k',
            link: 'prosuite'
        },
        {
            projectName: 'QRCode',
            pic: QRCode,
            techUsed: [['HTML'], ['CSS'], ['JS']],
            github: 'https://github.com/RealLuthoJara/qrcode',
            liveSite: 'https://realluthojara.github.io/qrcode/',
            info: 'k',
            link: 'qrcode'
        }, {
            projectName: 'ProSuite',
            pic: ProSuite,
            techUsed: [['HTML'], ['CSS'], ['JS'], ['Figma']],
            github: 'https://github.com/RealLuthoJara/prosuite',
            liveSite: 'https://realluthojara.github.io/prosuite/',
            info: 'k',
            link: 'prosuite'
        },
        {
            projectName: 'QRCode',
            pic: QRCode,
            techUsed: [['HTML'], ['CSS'], ['JS']],
            github: 'https://github.com/RealLuthoJara/qrcode',
            liveSite: 'https://realluthojara.github.io/qrcode/',
            info: 'k',
            link: 'qrcode'
        }, {
            projectName: 'ProSuite',
            pic: ProSuite,
            techUsed: [['HTML'], ['CSS'], ['JS'], ['Figma']],
            github: 'https://github.com/RealLuthoJara/prosuite',
            liveSite: 'https://realluthojara.github.io/prosuite/',
            info: 'k',
            link: 'prosuite'
        },
        {
            projectName: 'QRCode',
            pic: QRCode,
            techUsed: [['HTML'], ['CSS'], ['JS']],
            github: 'https://github.com/RealLuthoJara/qrcode',
            liveSite: 'https://realluthojara.github.io/qrcode/',
            info: 'k',
            link: 'qrcode'
        }, 
    ]

  // This to show more information only for the project clicked
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      // Collapse if already expanded
      setExpandedIndex(null);
    } else {
      // Expand clicked item
      setExpandedIndex(index);
    }
  };

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showMore = () => {
    setShowMoreInfo(true);
  };

  const showLess = () => {
    setShowMoreInfo(false);
  };


  return (
    <div id='projects' className='container project-section'>

        <div className="container project-content">

            <div className='section-title'>
                <h4>Projects</h4>
                <span className="underline"></span>
            </div>

            <div className='row container'>
                {projectData.map((item, index)=>(
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12' key={index} >
                        <div id={item.link} className='single-project'>
                            
                            <h4>{item.projectName}</h4>
                            
                            <div className= 'project-screenshot'>   
                                <img src={item.pic} alt='Screenshot of the project'/>    
                            </div>

                            <div className="row">
                                {item.techUsed.map((tech, index) => ( 
                                    <div className="tech" key={index}>
                                    {tech}
                                    </div>
                                ))}
                            </div> 

                            {/* The buttons for GitHub and Live site */}
                            <div className='row'> 
                                <button className="link github-link">
                                    <a href={item.github} target="_blank" rel="noreferrer"> 
                                        GitHub Link
                                    </a>
                                </button>

                                <button className="link live-site-link">
                                    <a href={item.liveSite} target="_blank" rel="noreferrer"> 
                                        Live Site
                                    </a>
                                </button>
                            </div>

                            {/* The div to show more or less about the information about the project */}
                            <div>
                                {expandedIndex === index ? (
                                    <>
                                    {/* Content to show when more info is visible */}
                                    <p>{item.info}</p>
                                    <div className='show' onClick={() => toggleExpand(index)}>Show Less <BsChevronUp size={20} /></div>
                                    </>
                                ) : (
                                    <>
                                    {/* Content to show when more info is hidden */}
                                    <div className='show' onClick={() => toggleExpand(index)}>Show More <BsChevronDown size={20} /></div>
                                    </>
                                )}
                            </div> 
                        </div>       
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
} 

export default Project