import React from 'react'
import './TechStack.css'

const TechStack = () => {
    const data = [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'React'
        },
        {
            name: 'Figma'
        },
        {
            name: 'BootStrap'
        },
        {
            name: 'Tailwind'
        },
        {
            name: 'Material UI'
        },
        {
            name: 'Jest'
        } 
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
                    <div className='tech-content'>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechStack