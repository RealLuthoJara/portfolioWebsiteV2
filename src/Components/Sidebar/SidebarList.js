import React from 'react'
import  './SidebarList.css'

import profilepic from '../../ProfilePic/profilepic.JPG'

import { FcHome, FcBusinessman, FcBullish, FcGenealogy, FcGraduationCap, FcDatabase, FcRating, FcContacts
 } from "react-icons/fc";

import { Link } from 'react-scroll'


const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>
        {expandSidebar ? (
            <div className='navbar-items '>
                <div className='sidebar-profile-pic'>
                    <img src={profilepic} alt='Profile Picture'/>
                </div>
                <ul>
                    <Link to='home'>
                        <li className='nav-item'><FcHome size={20}/>Home</li>
                    </Link>
                    
                    <Link to='about'>
                        <li className='nav-item'><FcBusinessman size={20}/>About Me</li>
                    </Link>
                    
                    <Link to='experience'>
                      <li className='nav-item'><FcBullish size={20}/>Work Experience</li>
                    </Link>
                    
                    <Link to='tech'>
                        <li className='nav-item'><FcGenealogy size={20}/>Tech Stack</li>
                    </Link> 

                    <Link to='projects'>
                      <li className='nav-item'><FcDatabase size={20}/>Projects</li>
                    </Link> 

                    <Link to='contact'>
                     <li className='nav-item'><FcContacts size={20}/>Contact Me</li>
                    </Link>

                </ul>
            </div>
        ) : (
            <div className='navbar-icons-only '>
            <ul>


                    <Link to='home'>
                        <li className='nav-item'><FcHome size={25}/></li>
                    </Link>
                    
                    <Link to='about'>
                        <li className='nav-item'><FcBusinessman size={25}/></li>
                    </Link>
                    
                    <Link to='experience'>
                        <li className='nav-item'><FcBullish size={25}/></li>
                    </Link>
                    
                    <Link to='tech'>
                        <li className='nav-item'><FcGenealogy size={25}/></li>
                    </Link> 

                    <Link to='projects'>
                        <li className='nav-item'><FcDatabase size={25}/></li>
                    </Link> 

                    <Link to='contact'>
                        <li className='nav-item'><FcContacts size={25}/></li>
                    </Link>

            </ul>
        </div>
        ) }

    </React.Fragment>
  )
}

export default SidebarList