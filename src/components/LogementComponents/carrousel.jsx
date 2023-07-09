import React, { useState } from 'react';
import './Carrousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carrousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    if (currentSlideIndex === slides.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  let picNumber = null;
  if (slides.length > 1) {
    picNumber = (
      <div className="picNumber">
        <span className="currentSlide">{currentSlideIndex + 1}</span> / <span className="totalSlides">{slides.length}</span>
      </div>
    );
  }

  return (
    <div className="carrousel">
      {slides.length > 1 && (
        <button className="carousel-button carousel-button-left" onClick={previousSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {picNumber}
      <img src={slides[currentSlideIndex]} alt={`Slide n° ${currentSlideIndex + 1}`} />
      {slides.length > 1 && (
        <button className="carousel-button carousel-button-right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
}

export default Carrousel;
