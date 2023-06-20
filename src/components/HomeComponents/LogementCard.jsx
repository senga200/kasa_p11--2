import React from 'react'
import './LogementCard.css'
import { Link } from 'react-router-dom'
//import DataFetch from '../datas/DataFecth'

function LogementCard({title, cover, id}) {
  return (
    <div className='logementCard'>

        <Link to={`/logement/${id}`}>
      <img src={cover} alt={title} />
     {title} 
      </Link>

    </div>
    )
}

export default LogementCard
