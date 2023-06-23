
import React from 'react';
import './Collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const chevronOpen = isOpen ? 'rotated' : '';
  const contentExpanded = isOpen ? 'expanded' : '';

  return (
    <div className="menu_collapse">
      <div className="collapse_container">
        <div className="collapse_title" onClick={toggleCollapse}>
          {title} <span className={`chevron ${chevronOpen}`}>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>
        {isOpen && <div className={`collapse_content ${contentExpanded}`}>
          <p>{content}</p>
        </div>}
      </div>
    </div>
  );
}

export default Collapse;
