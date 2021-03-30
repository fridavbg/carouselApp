import React, {useState} from 'react';

//Components
import Carousel from './components/Carousel.js';
import Arrows from './components/Arrows';

//Images
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';


const App = () => {
    const images = [
        {
            id: "image1",
            slide: <img src={img1}/>
        },        
        {
            id: "image2",
            slide: <img src={img2}/>
        },
        {
            id: "image3",
            slide: <img src={img3}/>
        },
        {
            id: "image4",
            slide: <img src={img4}/>
        },
    ]
return (
    <div className="carousel-container">
        <Carousel slides={images}></Carousel> 
    </div> 
    );
}
export default App;