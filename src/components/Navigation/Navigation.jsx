import React from 'react'
import './Navigation.css'
import { BsCloudHaze2Fill } from 'react-icons/bs'

const Navigation = () => {
  return (
    <div className="nav-container">
    <nav className='main-container'>
        <div className="logo">
            <BsCloudHaze2Fill className='cloud-logo'/>
            <h1>CloudTech</h1>
        </div>

        <ul className="nav-links">
            <li className='nav-item'><a href="" className="nav-link">Home</a></li>
            <li className='nav-item'><a href="" className="nav-link">In Stock</a></li>
            <li className='nav-item'><a href="" className="nav-link">Contact</a></li>
        </ul>

        <div className="nav-menu">
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
    </nav>
    </div>
  )
}

export default Navigation