import React from 'react'
import './LogementCard.css'
import { Link } from 'react-router-dom'
//import DataFetch from '../datas/DataFecth'

function LogementCard({title, cover}) {
  return (
    <div className='logementCard'>

        <Link to='/logement'>
      <img src={cover} alt={title} />
      <br/>{title} 


      
      </Link>
    </div>
  )
}

export default LogementCard
