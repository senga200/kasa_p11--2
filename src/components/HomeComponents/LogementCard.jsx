import React from 'react'
import './LogementCard.css'
import { Link } from 'react-router-dom'

function LogementCard({title, cover, id}) {
  return (
    <div className='logementCard'>

        <Link to={`/logement/${id}`}>
      <img src={cover} alt={title} />
      <div className='title_container'>
      <div className="title">{title}</div>
      </div>
      </Link>  
    </div>
    )
}

export default LogementCard
