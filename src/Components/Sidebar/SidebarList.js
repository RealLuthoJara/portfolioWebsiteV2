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
                    <img src={profilepic} alt='Profile Picture'/>
                </div>
                <ul>
                    <li className='nav-item'><FcHome size={20}/>Home</li>
                    <li className='nav-item'><FcBusinessman size={20}/>About Me</li>
                    <li className='nav-item'><FcBullish size={20}/>Work Experience</li>
                    <li className='nav-item'><FcGenealogy size={20}/>Tech Stack</li>
                    <li className='nav-item'><FcGraduationCap size={20}/>Education</li>
                    <li className='nav-item'><FcDatabase size={20}/>Projects</li>
                    <li className='nav-item'><FcRating size={20}/>Testimonials</li>
                    <li className='nav-item'><FcContacts size={20}/>Contact Me</li>
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