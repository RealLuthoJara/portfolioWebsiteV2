import React from 'react'
import  './SidebarList.css'

import profilepic from '../../Image/profilepic.JPG'

import { FcHome, FcBusinessman, FcBullish, FcGenealogy, FcGraduationCap, FcDatabase, FcRating, FcContacts
 } from "react-icons/fc";


const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>
        {expandSidebar ? (
            <div className='navbar-items '>
                <div className='sidebar-profile-pic'>
                    <img src={profilepic} alt='Profile Picture' />
                </div>
                <ul>
                    <li className='nav-item'><FcHome size={25}/>Home</li>
                    <li className='nav-item'><FcBusinessman size={25}/>About Me</li>

                    <li className='nav-item'><FcBullish size={25}/>Work Experience</li>
                    
                    <li className='nav-item'><FcGenealogy size={25}/>Tech Stack</li>
                    <li className='nav-item'><FcGraduationCap size={25}/>Education</li>
                    <li className='nav-item'><FcDatabase size={25}/>Projects</li>
                    <li className='nav-item'><FcRating size={25}/>Testimonials</li>
                    <li className='nav-item'><FcContacts size={25}/>Contact Me</li>
                </ul>
            </div>
        ) : (
            <div className='navbar-icons-only '>
            <ul>
                <li className='nav-item'><FcHome size={25}/></li>
                <li className='nav-item'><FcBusinessman size={25}/></li>
                <li className='nav-item'><FcBullish size={25}/></li>
                <li className='nav-item'><FcGenealogy size={25}/></li>
                <li className='nav-item'><FcGraduationCap size={25}/></li>
                <li className='nav-item'><FcDatabase size={25}/></li>
                <li className='nav-item'><FcRating size={25}/></li>
                <li className='nav-item'><FcContacts size={25}/></li>
            </ul>
        </div>
        ) }

    </React.Fragment>
  )
}

export default SidebarList