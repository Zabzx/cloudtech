import './Showcase1.css'
import React from 'react'
import IMG from '../../assets/showcase1.png'

const Showcase1 = () => {
  return (
    <div className="showcase1" id='showcase1'>
        <h1>The Future of Technology is here.</h1>

        <div className="s1-flex">
            <div className="s1-text">
                <p>Stay up to date with the latest technology when shopping at Cloudtech. All the latest brands, trends you name it! We offer high end devices and always refresh out stock with new and improved tech.</p>
            </div>

            <div className="s1-img">
                <img src={IMG} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Showcase1