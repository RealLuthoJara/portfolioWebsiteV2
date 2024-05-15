import React from 'react'

import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import TechStack from './Components/TechStack/TechStack'
import Project from './Components/Projects/Project'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
    
    <Sidebar />
    <About />   
    <WorkExperience />
    <TechStack />
    <Project />
    <Contact />

    </>
  )
}

export default App