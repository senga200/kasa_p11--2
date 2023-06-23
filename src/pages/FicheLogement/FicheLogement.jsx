
import React from 'react';
import Datas from '../../datas/Datas.json';
import { useParams } from 'react-router-dom';
import './FicheLogement.css';
import Collapse from '../../components/LogementComponents/Collapse';
import Carrousel from '../../components/LogementComponents/carrousel';
import Tags from '../../components/LogementComponents/Tags';
import Rating from '../../components/LogementComponents/Rating';
import { Navigate } from 'react-router-dom';

function FicheLogement() {
  const { id } = useParams();
  const logement = Datas.find((data) => data.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div className='main'>
      <div className="carrousel">
        <Carrousel slides={logement.pictures}/>
      </div>
      <div className='logement_container'>
        <div className="header_logement">
          <div className="header_left">
            <h2>{logement.title}</h2>
            <div className="location">{logement.location}</div>
            <div className="tags">
              <Tags />
            </div>
          </div>
          <div className="header_right">
            <div className="host">
              <div className='host_name'>{logement.host.name}</div>
              <div className='host_pic'>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            </div>
            <div className="rating_FicheLogement">
            <Rating /> 
            </div>
          </div>
        </div>
        <div className="collapse_ficheLogement">
          <Collapse title="Description" content={logement.description} collapseClass="collapse_description" />
          <Collapse
            title="Equipements"
            content={
              <div className="equipements_list">
                {logement.equipments.map((equipment) => (
                  <div key={equipment} className="equipment">
                    {equipment}
                  </div>
                ))}
              </div>
            }
            collapseClass="collapse_equipements"
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;



