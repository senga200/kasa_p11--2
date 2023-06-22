import React from 'react'
import './Banner.css'


function Banner() {
    return (
        <div className='banner' style={{backgroundImage: 'url("banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'
    }}>
 <div className="superposition">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
        </div>
      )
}

export default Banner
