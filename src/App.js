import React from 'react';

//Components
import Carousel from './components/Carousel.js';
import Slide from './components/Slide.js';

//Images
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

const App = () => 
(
<>
    <Carousel>
        <Slide id="image-1">
            <img src={img1}/>
        </Slide>

        <Slide id="image-2">
            <img src={img2}/>
        </Slide>

        <Slide id="image-3">
            <img src={img3}/>
        </Slide>

        <Slide id="image-4">
            <img src={img4}/>
        </Slide>
    </Carousel>
</>
);

export default App;