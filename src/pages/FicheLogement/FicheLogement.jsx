// // import React from 'react'
// // import Datas from "../../datas/Datas.json"
// // //import { useParams } from "react-router-dom";

// // function FicheLogement() {
// //   return (
// //     <div>
// //  {Datas.map((data) => (
// //         <div key={data.id}>
// //           <h2>{data.title}</h2>
// //           {/* <img src={data.cover} alt={data.title} /> */}
// //         </div>
// //       ))}

// //     </div>
// //     )
// // }
// // // function FicheLogement() {
// // //     const { id } = useParams();
// // //     const logement = Datas.find((logement) => logement.id === id);
// // //     if (!logement) {
// // //       return <div>Annonce non trouvée</div>;
// // //     }

// // //     return (
// // //       <div>
// // //         <h1>{logement.title}</h1>
// // //         <img src={logement.cover} alt={logement.title} />
// // //         <div className="description">{logement.description}</div>
// // //         {/* ... autres détails de l'annonce */}
// // //       </div>
// // //     );
// // //   }


// // export default FicheLogement


// import React from 'react';
// import Datas from "../../datas/Datas.json";
// import { useParams } from "react-router-dom";
// import './FicheLogement.css';
// import Collapse from "../../components/LogementComponents/Collapse";


// function FicheLogement() {
//   const { id } = useParams();
//   const logement = Datas.find((data) => data.id === id);

//   if (!logement) {
//     return <div>Annonce non trouvée</div>;
//   }

//   return (
//   <div>
//     <div className='carrousel'>
//       <img src={logement.cover} alt={logement.title} />
//     </div>
//     <div className='header_logement'>
//       <div className="header_left">
//         <h2>{logement.title}</h2>
//         <div className="location">{logement.location}</div>
//         <div className="tags">
//           {logement.tags.map((tag) => (
//             <span key={tag} className="tag">{tag}</span>
//           ))}
//         </div>
//       </div>
//       <div className="header_right">
//         <div className="host">{logement.host.name}</div>
//         <div className="rating">{logement.rating}/5</div>
//       </div>
//     </div>
//     <div className='collapse'>
//       <div className="description">
//         <div className="description_title">
//         <h3>Description</h3>

//         </div> 
//         {logement.description}
//       </div>
//       <div className="equipements">
//         <Collapse titre="titre" content="contenu titre collapse equipements"/>
//         <h3>Equipements</h3>
//         <div className="equipements_list">
//         <Collapse titre="titre" content="contenu titre collapse equipements list"/>

//           {logement.equipments.map((equipment) => (
//             <div key={equipment} className="equipment">{equipment}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>

//   );
// }

// export default FicheLogement;



import React from 'react';
import Datas from '../../datas/Datas.json';
import { useParams } from 'react-router-dom';
import './FicheLogement.css';
import Collapse from '../../components/LogementComponents/Collapse';
import Carrousel from '../../components/LogementComponents/carrousel';

function FicheLogement() {
  const { id } = useParams();
  const logement = Datas.find((data) => data.id === id);
  //const slides = logement.pictures.map((picture) => ({ img: picture }));

  if (!logement) {
    return <div>Annonce non trouvée</div>;
  }

  return (
    <div>
      <div className="carrousel">
        <Carrousel slides={logement.pictures}/>
      </div>
      <div className="header_logement">
        <div className="header_left">
          <h2>{logement.title}</h2>
          <div className="location">{logement.location}</div>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="header_right">
          <div className="host">
            <div>{logement.host.name}</div>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">{logement.rating}/5</div>
        </div>
      </div>
      <div className="collapse">
        <Collapse title="Description" content={logement.description} />
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
        />
      </div>
    </div>
  );
}

export default FicheLogement;
