import React from 'react'
import Layouts from '../components/Layout/Layouts'

const About = () => {
  return (
    <Layouts title={"About us - Ecommer app"}>
      <div className="about">
        <div className="about-content">
          <div className="about-image-container">
            <img src="/images/aboutus.jpg"  alt="About Us" className="about-image" />
            <div className="glow-effect"></div>
            <div className="about-text">
              LET ME COOK!!!
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default About
