import React from 'react'
import Contact from '../pages/Contact'

const About = ({name}) => {
  return (
    <div>
      <p>Name:{name}</p>
      {/* <p>Age:{age}</p>
      <p>Department:{dept}</p> */}
      <Contact name={name}/>
    
    
    </div>
  )
}

export default About
