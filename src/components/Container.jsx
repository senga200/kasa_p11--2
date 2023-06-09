import React from 'react'
import './Container.css'

function Container(props) {
    const {children} = props
  return (
    <div className='container'>
        {children}
        <p>Container</p>
      
    </div>
  )
}

export default Container
