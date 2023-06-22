import React from 'react'
import Datas from "../../datas/Datas.json"
import { useParams } from "react-router-dom";
import './Tags.css'
function Tags() {
    const { id } = useParams();
    const logement = Datas.find((data) => data.id === id);
  return (

        <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
    
  )
}

export default Tags
