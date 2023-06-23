import React from 'react'
import './Container.css'

function Container(props) {
    const {children} = props
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Container
