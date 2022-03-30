import './Showcase1.css'
import React from 'react'
import IMG from '../../assets/showcase1.png'

const Showcase1 = () => {
  return (
    <div className="showcase1" id='showcase1'>
        <h1>The Future of Technology is here.</h1>

        <div className="s1-flex">
            <div className="s1-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac justo at ligula venenatis pharetra. Nulla molestie vitae lorem at laoreet. Nam justo lectus, sodales et massa sagittis, viverra vulputate</p>
            </div>

            <div className="s1-img">
                <img src={IMG} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Showcase1