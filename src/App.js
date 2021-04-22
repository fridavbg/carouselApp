import React, {useState} from 'react';

//Components
import Carousel from './components/Carousel.js';
import ImageData from './components/ImageData.js'

const App = () => {
return (
    <div className="carousel-container">
        <h3 className="title">React Carousel App</h3>
        <Carousel slides={ImageData}></Carousel> 
    </div> 
    );
}

export default App;