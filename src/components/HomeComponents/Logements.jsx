import React from 'react'
import './Logements.css'
import LogementCard from './LogementCard'
import Datas from "../../datas/Datas.json"

function Logements() {
  return (
    <div className='logements'>
      {Datas.map ((logement) => <LogementCard key = {logement.id} title = {logement.title} cover ={logement.cover} /> )}
    </div>
  )
}

export default Logements
 