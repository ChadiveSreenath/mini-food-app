import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero-container'>
            <div style={{height:"500px",position:"relative"}}>
                {/* Overlay  */}
                <div className='hero-overlay'>
                    <h1>The <span>Best</span></h1>
                    <h1><span>Foods</span> Delivered</h1>
                </div>
                <img className='featured-image' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>
        </div>
    )
}

export default Hero