import React from 'react'
import './LogementCard.css'
import { Link } from 'react-router-dom'
//import DataFetch from '../datas/DataFecth'

function LogementCard({title}) {
  return (
    <div className='logementCard'>

        <Link to='/logement'>
      {title}
      </Link>
    </div>
  )
}

export default LogementCard
