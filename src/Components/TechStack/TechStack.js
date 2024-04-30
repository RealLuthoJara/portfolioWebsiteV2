import React, { useState } from 'react'
import './TechStack.css'

const TechStack = () => {
    const [expandTechStack, setExpandTechStack] = useState(false);

    const toggleExpand = (isMouseOver) => {
        setExpandTechStack(isMouseOver);
      };
    
    const data = [
        {
            symbol: 'n',
            name: 'HTML',
            projects: 'kh', 
            color: 'omodo',
            backgroundColor: '#ffffff',
        },
        // {
        //     symbol: n,
        //     name: 'CSS',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,
        // },
        // {
        //     symbol: n,
        //     name: 'JavaScript',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,
        // },
        // {
        //     symbol: n,
        //     name: 'React',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,        
        // },
        // {
        //     symbol: n,
        //     name: 'Figma',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,        
        // },
        // {
        //     symbol: n,
        //     name: 'Bootstrap',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,
        // },
        // {
        //     symbol: n,
        //     name: 'Tailwind',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,
        // },
        // {
        //     symbol: n,
        //     name: 'Material UI',
        //     projects: kh, 
        //     color: omodo,
        //     backgroundColor: elivr,        
        // }, 
    ]
  return (
    <div className='container techstack-section'>

        <div className='section-title'>
            <h4>Tech Stack</h4>
            <span className="underline"></span>
        </div>
        
        <div className='row container'>
            {data.map((item, index)=>(
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div onMouseOver={() => toggleExpand(true)} onMouseOut={() => toggleExpand(false)} className={!expandTechStack ? 'tech-content-expand tech-content' : 'tech-content'}>

                    {/* <div onMouseOver={toggleExpand} className= {!expandTechStack ? '.tech-content-expand tech-content' : 'tech-content'}> */}
                        {!expandTechStack ? (
                        <p>{item.name}
                        </p>
                        ) : (
                        <p>
                            {item.symbol}
                            {item.name}
                            {item.projects}
                            {item.color}
                            {item.backgroundColor}
                        </p>

                        ) }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechStack