import React from 'react'
import './Project.css'

import ProSuite from './Screenshots/ProSuite.png';

const Project = () => {

    const projectData = [
        {
            projectName: 'ProSuite',
            pic: ProSuite,
            techUsed: ['HTML', 'CSS', 'JS', 'Figma'],
            github: 'https://github.com/RealLuthoJara/prosuite',
            liveSite: 'https://realluthojara.github.io/prosuite/',
            info: 'k'
        },
        {
            projectName: 'l',
            pic: 'l',
            techUsed: ['l', 's'],
            github: 'l',
            liveSite: 'd',
            info: 'k'
        }
    ]

  return (
    <div className='container project-section'>
        <div className='section-title'>
            <h4>Tech Stack</h4>
            <span className="underline"></span>
        </div>

        <div className='row container'>
            {projectData.map((item, index)=>(
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' key={index}>

                    <div>
                        <div>{item.projectName}</div>
                        <div className='project-screenshot'>   
                            <img src={item.pic} alt='Screenshot of the project'/>    
                        </div>
                        <div>{item.techUsed}</div>       
                        <div>{item.github}</div>       
                        <div>{item.liveSite}</div>       
                        <div>{item.info}</div>       
                    </div>       
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default Project