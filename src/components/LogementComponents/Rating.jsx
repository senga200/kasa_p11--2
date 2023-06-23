import React from 'react'
import './Rating.css'
import Datas from '../../datas/Datas.json';
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



function Rating() {
  const { id } = useParams();
  const logement = Datas.find((data) => data.id === id);

  const stars = [];
  const maxStars = 4;
  for (let i = 0; i <= maxStars; i++) {
    if (i < logement.rating) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className='full_star'/>);
  } else {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} className="empty_star" />);
  }
  }

  return (
    <div className='stars'>
      {stars}
    </div>
  );
}

export default Rating;