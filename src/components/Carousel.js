import React from 'react';
import 'App.css';

const Carousel = (props) => (

<div className="carousel-container">

    <a href="#image-1">1</a>
    <a href="#image-2">2</a>
    <a href="#image-3">3</a>
    <a href="#image-4">4</a>

{/* <div>
    {props.children.map(child => <a>{child}</a>)}
</div> */}
    
    <div className="carousel">      
        {props.children}

    </div>
</div>

)

export default Carousel;