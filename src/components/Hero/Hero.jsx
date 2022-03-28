import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero-img.jpg'

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-flex main-container">
        <div className="hero-text">
            <h1>This is CloudTech Electronics</h1>
            <p>Our mission is to provide the latest tech on demand at the most affordable prices. All of our merchandise are authentic and not used. All items come with a 1-Year warranty and you can choose between multiple means of purchasing.</p>
            <button className="btn">Read More</button>
        </div>
        
        <div className="hero-img">
            <img src={heroImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero