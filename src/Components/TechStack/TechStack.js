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
import tailwind from './Symbols/tailwind.png';
import typescript from './Symbols/typescript.png';
import wordpress from './Symbols/wordpress.png';

const TechStack = () => { 
    
    
    //The data for each stack
    const techStackData = [
        {
            symbol: html,
            name: 'HTML', 
            color: 'white', 
            projects: ['links'],
            background: 'linear-gradient(94deg, rgba(213,127,35,1) 25%, rgba(205,21,21,1) 75%)',
        },
        {
            symbol: css,
            name: 'CSS', 
            color: 'white',
            projects: ['links'], 
            background: 'linear-gradient(94deg, rgba(35,213,194,1) 25%, rgba(21,39,205,1) 75%)',
        },
        {
            symbol: js,
            name: 'JavaScript', 
            color: 'black',
            projects: ['links'], 
            background: 'linear-gradient(94deg, rgba(208,213,35,1) 25%, rgba(255,255,255,1) 75%)',
        },
        {
            symbol: react,
            name: 'React', 
            color: 'white',
            projects: ['links'],    
            background: 'linear-gradient(47deg, rgba(141,34,172,1) 20%, rgba(18,53,150,1) 40%, rgba(20,185,172,1) 69%)',     
        },
        {
            symbol: figma,
            name: 'Figma', 
            color: 'white',
            projects: ['links'],        
            background: 'linear-gradient(90deg, rgba(34,172,50,1) 10%, rgba(114,18,150,1) 31%, rgba(223,68,28,1) 47%, rgba(218,111,56,1) 66%, rgba(218,111,56,1) 87%, rgba(26,206,192,1) 87%)',
        },
        {
            symbol: bootstrap,
            name: 'Bootstrap', 
            color: 'white',
            projects: ['links'], 
            background: 'radial-gradient(circle, rgba(114,18,150,1) 51%, rgba(255,255,255,1) 100%)',
        },
        {
            symbol: tailwind,
            name: 'Tailwind', 
            color: 'white',
            projects: ['links'], 
            background: 'linear-gradient(90deg, rgba(18,144,150,1) 51%, rgba(17,185,110,1) 100%)',
        },
        {
            symbol: mui,
            name: 'Material UI', 
            color: 'white',
            projects: ['links'],  
            background: 'linear-gradient(90deg, rgba(18,42,150,1) 45%, rgba(17,185,173,1) 92%)',        
    }, 
    ]
 
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

    // To show more teck stack projects
    const [showMoreTech, setShowMoreTech] = useState(3);

    const loadMore = ()=>{
        setShowMoreTech((prev)=>prev+3)
    }

  return (
    <div className='container tech-stack-section'>

        <div className='section-title'>
            <h4>Tech Stack</h4>
            <span className="underline"></span>
        </div>

        <div className='row container'>

            {/* This (techStackData.slice(0, showMoreTech)) is to show that only the 1st three items should appear */}
            {techStackData.slice(0, showMoreTech).map((item, index)=>(
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' key={index}>
                    <div 
                        className={expandedIndex === index ? 'tech-content tech-content-expand' : 'tech-content'} 
                        style={
                            expandedIndex === index ? { 
                            background: item.background, 
                            color: item.color, 
                        } : {}}
                        onClick={() => {
                            toggleExpand(index);
                        }}                  
                    >
                        {expandedIndex === index ? (
                        <span>
                            <div className='tech-stack-symbol'>
                                <img src={item.symbol} alt='Tech Stack Symbol'/>
                            </div>
                            <div>{item.name}</div>
                            {expandedIndex === index && (
                            <div>
                                <div>{item.projects}</div>
                            </div>
                        )}
                        </span>
                        ) : ( 
                        <span>
                            <div className='tech-stack-symbol'>
                                <img src={item.symbol} alt='Tech Stack Symbol'/>
                            </div>
                            <div>{item.name}</div>
                        </span>

                        ) }
                    </div>
                </div>
            ))}
        </div>
        {showMoreTech >= techStackData.length ? null : (
            <div className='load-more-items' onClick={loadMore}>
                Load More
            </div>
        )}
    </div>
  )
}

export default TechStack