import React, {useState, useRef, useEffect} from 'react'
import './Navigation.css'
import { BsCloudHaze2Fill } from 'react-icons/bs'

const Navigation = () => {

  const [menu, setMenu] = useState(false)


  useEffect(() => {
    const html = document.querySelector('html');

    if(menu) {
      html.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
    }

  }, [menu])

  return (
    <div className="nav-container">
    <nav className='main-container'>
        <div className="logo">
            <BsCloudHaze2Fill className='cloud-logo'/>
            <h1>CloudTech</h1>
        </div>

        <ul className={ menu ? 'nav-links nav-active' : 'nav-links'}>
            <li className='nav-item'><a href="index.html" className="nav-link" onClick={() => setMenu(!menu)}>Home</a></li>
            <li className='nav-item'><a href="#showcase2" className="nav-link" onClick={() => setMenu(!menu)}>About</a></li>
            <li className='nav-item'><a href="#footer" className="nav-link" onClick={() => setMenu(!menu)}>Contact</a></li>
        </ul>

        <div className="nav-menu" onClick={() => setMenu(!menu)}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
    </nav>
    </div>
  )
}

export default Navigation