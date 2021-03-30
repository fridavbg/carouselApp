import React, { useState } from 'react'
import 'App.css';

import Arrows from './Arrows.js';
import Slide from './Slide.js';
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
    
return (
    <div>
        <ImagePicker slides={props.slides}/>
        <div className="carousel">
        {props.slides.map(slide => 
            <Slide id={slide.id} key={slide.id}>
                {slide.slide}
            </Slide>
            )}
            </div>
        <Arrows nextId={props.slides[Math.min(current + 1, length - 1)].id} prevId={props.slides[Math.max(current - 1, 0)].id} next={nextSlide} prev={prevSlide}/>   
    </div>
    )
}
export default Carousel;