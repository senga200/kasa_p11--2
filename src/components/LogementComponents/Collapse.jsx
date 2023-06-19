// import React from 'react'
// import './Collapse.css'
// import { useState } from 'react'


// function Collapse({title, content}) {
//     const [isOpen, setIsOpen] = useState(false)
//     // const toggle = () => setIsOpen(!isOpen)
//     // const toggle = () => setIsOpen((isOpen) => !isOpen)
//     const toggle = (e) => {console.log(e)}

    
//   return (
//     <div className='collapse'>        
//       <div className='collapse_title'>{content}
//       </div>
//       <div className='collapse_title' onClick={toggle}>
//             {title} <span className="chevron"> 🔻
//           {/* <img src="chevron.svg" alt="chevron" /> */}
//       </span> 
  
      
//         </div>


      
//     </div>
//   )
// }

// export default Collapse


import React from 'react';
import './Collapse.css';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu_collapse">
      <div className='collapse_container'>
      <div className="collapse_title" onClick={toggleCollapse}>
        {title} <span className="chevron">🔻</span>
      </div>
      {isOpen && <div className="collapse_content">{content}</div>}
      </div>
    </div>
  );
}

export default Collapse;
