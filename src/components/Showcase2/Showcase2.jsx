import './Showcase2.css'
import React from 'react'
import IMG from '../../assets/showcase2.png'

const Showcase2 = () => {
  return (
    <div className="showcase2" id='showcase2'>
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
                        <p>Best prices compared to competitors</p>
                    </div>
                    <div className="card2">
                        <h2>Best Warranties</h2>
                        <p className='color-white'>Up to 5 years Warranty!</p>
                    </div>
                </div>
                <p className='small'>Order 2 products and get the next one 25% off! We do giveaways every other week so make sure apply if you have purchased something within the month!</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Showcase2