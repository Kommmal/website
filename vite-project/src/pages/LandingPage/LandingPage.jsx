import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='hero-container'>
        <div className="hero-left">
            <h1>Discover <br />Most Suitable <br />Watches</h1>
            <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
            <div className="button">
                <button>Shop Now</button>
            </div>
        </div>
        <div className="hero-right">
            <img src="/images/landiingpage-watch.png" alt="" />
        </div>
    </div>
  )
}

export default LandingPage