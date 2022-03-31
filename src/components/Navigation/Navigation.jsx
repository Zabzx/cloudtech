import React, {useState, useRef} from 'react'
import './Navigation.css'
import { BsCloudHaze2Fill } from 'react-icons/bs'

const Navigation = () => {

  const [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu(!menu);
    document.body.style.overflowY = 'hidden'
  }

  return (
    <div className="nav-container">
    <nav className='main-container'>
        <div className="logo">
            <BsCloudHaze2Fill className='cloud-logo'/>
            <h1>CloudTech</h1>
        </div>

        <ul className={menu ? 'nav-active nav-links' : 'nav-links'}>
            <li className='nav-item'><a href="index.html" className="nav-link">Home</a></li>
            <li className='nav-item'><a href="#showcase2" className="nav-link">About</a></li>
            <li className='nav-item'><a href="#footer" className="nav-link">Contact</a></li>
        </ul>

        <div className="nav-menu" onClick={openMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
    </nav>
    </div>
  )
}

export default Navigation