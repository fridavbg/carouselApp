import React, { useState } from 'react'
import 'App.css';

import Arrows from './Arrows.js';
import ImagePicker from './ImagePicker';

const Carousel = (props) => {
    
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
      const newCurrent = current === length - 1 ? 0 : current + 1;
      window.location.href = `#${props.slides[newCurrent].id}`;
      setCurrent(newCurrent);
    }

    const prevSlide = () => {
      const newCurrent = current === 0 ? length - 1 : current - 1;
      window.location.href = `#${props.slides[newCurrent].id}`;
      setCurrent(newCurrent);
    }

  if(!Array.isArray(props.slides) || length <= 0) {
      return null;
    } 
    
return (
  <div className="carousel-container">

    <Arrows
      next={nextSlide}
      prev={prevSlide}
    />  

    <div className="carousel">
      {props.slides.map((slide, index) => (
        <div className="slide" id={slide.id} key={index}>
          {slide.slide}
        </div>
      ))}
    </div>

    <ImagePicker slides={props.slides} current={current} setCurrent={setCurrent} />
  </div>
);
}

export default Carousel;
