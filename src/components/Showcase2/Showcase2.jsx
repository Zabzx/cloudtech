import './Showcase2.css'
import React from 'react'
import IMG from '../../assets/showcase2.png'

const Showcase2 = () => {
  return (
    <div className="showcase2">
        <div className="main-container">
        <div className="s2-flex">
            <div className="s2-img">
                <img src={IMG} alt="" />
            </div>

            <div className="s2-text">
                <h1 className='s2-heading'>Cutting edge technology</h1>
                <div className="cards">
                    <div className="card">
                        <h2>Affordable Prices</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card2">
                        <h2>Best Warranties</h2>
                        <p className='color-white'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <p className='small'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error aliquam, hic maiores nobis ab minus? Deleniti alias quam ex. Doloribus iusto quo totam officia? Beatae numquam laudantium culpa rerum autem!</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Showcase2