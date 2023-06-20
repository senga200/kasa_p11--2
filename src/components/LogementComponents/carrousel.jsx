
import React, { useState } from 'react';
import './Carrousel.css';

function Carrousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    if (currentSlideIndex === slides.length - 1) {
      setCurrentSlideIndex(0); // Revenir à la première diapositive si on est à la dernière
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1); // Passer à la diapositive suivante
    }
  };
  
  const previousSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(slides.length - 1); // Aller à la dernière diapositive si on est à la première
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1); // Passer à la diapositive précédente
    }
  };

  return (
    <div className="carrousel">
      <button onClick={previousSlide}>Précedent</button>
      <img src={slides[currentSlideIndex]} alt={`Slide n° ${currentSlideIndex + 1}`} />
      <button onClick={nextSlide}>Suivant</button>
    </div>
  );
}

export default Carrousel;