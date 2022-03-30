import React from 'react'
import './Footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
        <h1>Get in touch </h1>

        <div className="footer-items main-container">
            <ul className="contact">
                <h2>Contact Us</h2>
                <div className="footer-content">
                <li>Email: cloudtech@fakemail.com</li>
                <li>Telephone: +32 89218312</li>
                <div className="footer-links">
                <BsTwitter/>
                <BsInstagram/>
                </div>
                </div>
            </ul>

            <ul className="location">
                <h2>Our Location</h2>
                <div className="footer-content">
                <li>23rd Random Street, Clownsville</li>
                <li>Shiganshina, Paradis</li>
                <li>Liberio, Marley</li>
                </div>
            </ul>

            <ul className="about">
                <h2>About Us</h2>
                <div className="footer-content">
                <li>Our mission Statement</li>
                <li>Our History</li>
                <li>Careers</li>
                </div>
            </ul>
        </div>
    </footer>
  )
}

export default Footer