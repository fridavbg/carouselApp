import React, { useState } from 'react'
import 'App.css';

import Arrows from './Arrows.js';
import ImagePicker from './ImagePicker';

const Carousel = (props) => {
    
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
  if(!Array.isArray(props.slides) || length <= 0) {
      return null;
    } 
    
return (
  <div>

    <Arrows
      nextId={props.slides[Math.min(current)].id}
      prevId={props.slides[Math.max(current)].id}
      next={nextSlide}
      prev={prevSlide}
    />  

    <div className="carousel">
      {props.slides.map((slide, index) => (
        <div className="slide" id={index} key={index}>
          {slide.slide}
        </div>
      ))}
    </div>
    <ImagePicker slides={props.slides} />
  </div>
);
}

export default Carousel;
