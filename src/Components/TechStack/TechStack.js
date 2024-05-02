import React, { useState } from 'react'
import './TechStack.css'

import html from './Symbols/html.png';
import css from './Symbols/css.png';
import js from './Symbols/js.svg';
import react from './Symbols/react.png';
import angular from './Symbols/angular.png';
import bootstrap from './Symbols/bootstrap.png';
import figma from './Symbols/figma.png';
import git from './Symbols/git.png';
import github from './Symbols/github.png';
import jquery from './Symbols/jquery.png';
import mean from './Symbols/mean.png';
import mern from './Symbols/mern.png';
import mui from './Symbols/mui.png';
import mysql from './Symbols/mysql.png';
import npm from './Symbols/npm.png';
import styledComponents from './Symbols/styled-components.png';
import tailwind from './Symbols/tailwind.jpeg';
import typescript from './Symbols/typescript.png';
import wordpress from './Symbols/wordpress.png';

const TechStack = () => {
    const [expandTechStack, setExpandTechStack] = useState(false);

    const toggleExpand = (isMouseOver) => {
        setExpandTechStack(isMouseOver);
      };
    
    const data = [
        {
            symbol: html,
            name: 'HTML',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',
//             background: rgb(213,127,35);
// background: linear-gradient(94deg, rgba(213,127,35,1) 25%, rgba(205,21,21,1) 75%);
        },
        {
            symbol: css,
            name: 'CSS',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',
//             background: rgb(35,213,194);
// background: linear-gradient(94deg, rgba(35,213,194,1) 25%, rgba(21,39,205,1) 75%);
        },
        {
            symbol: js,
            name: 'JavaScript',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',
//             background: rgb(208,213,35);
// background: linear-gradient(94deg, rgba(208,213,35,1) 25%, rgba(0,0,0,1) 75%);
        },
        {
            symbol: react,
            name: 'React',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',   
//             background: rgb(141,34,172);
// background: linear-gradient(47deg, rgba(141,34,172,1) 20%, rgba(18,53,150,1) 40%, rgba(20,185,172,1) 69%);     
        },
        {
            symbol: figma,
            name: 'Figma',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',        
//             background: rgb(34,172,50);
// background: linear-gradient(90deg, rgba(34,172,50,1) 10%, rgba(114,18,150,1) 31%, rgba(26,206,192,1) 47%, rgba(223,68,28,1) 66%, rgba(218,111,56,1) 87%, rgba(218,111,56,1) 87%);
        },
        {
            symbol: bootstrap,
            name: 'Bootstrap',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',
//             background: rgb(114,18,150);
// background: radial-gradient(circle, rgba(114,18,150,1) 51%, rgba(255,255,255,1) 100%);
        },
        {
            symbol: tailwind,
            name: 'Tailwind',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr',
//             background: rgb(18,144,150);
// background: linear-gradient(90deg, rgba(18,144,150,1) 51%, rgba(17,185,110,1) 100%);
        },
        {
            symbol: mui,
            name: 'Material UI',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: 'elivr', 
//             background: rgb(18,42,150);
// background: linear-gradient(90deg, rgba(18,42,150,1) 45%, rgba(17,185,173,1) 92%);       
        }, 
    ]
  return (
    <div className='container tech-stack-section'>

        <div className='section-title'>
            <h4>Tech Stack</h4>
            <span className="underline"></span>
        </div>
        
        <div className='row container'>
            {data.map((item, index)=>(
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' key={index}>
                    <div 
                        onMouseOver={()=> toggleExpand(true)} onMouseOut={() => toggleExpand(false)} 
                        className={!expandTechStack ? 'tech-content' : 'tech-content tech-content-expand'} 
                        style={!expandTechStack ? { backgroundColor: item.backgroundColor } : {}}
                        key={index}
                    >

                    {/* <div onMouseOver={toggleExpand} className= {!expandTechStack ? '.tech-content-expand tech-content' : 'tech-content'}> */}
                        {!expandTechStack ? (
                        <span>
                            <div className='tech-stack-symbol'>
                                <img src={item.symbol} alt='Tech Stack Symbol'/>
                            </div>
                            {item.name}
                        </span>
                        ) : ( 
                        <span>
                            <div className='tech-stack-symbol'>
                                <img src={item.symbol} alt='Tech Stack Symbol'/>
                            </div>
                            {item.name}
                            {item.projects}
                            {item.color}
                            {item.backgroundColor}
                        </span>

                        ) }
                    </div>
                </div>
            ))}
        </div>
        <span className='load-more'>
            Load More
        </span>
    </div>
  )
}

export default TechStack