import React from 'react'
import './Banner.css'


function Banner() {
    return (
        <div className='banner' style={{backgroundImage: 'url("banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center'
    }}>
          {/* <img src="banner.jpg" alt="banner" /> */}
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      )
}

export default Banner
