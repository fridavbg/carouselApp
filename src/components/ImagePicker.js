import React from 'react';
import 'App.css';


const ImagePicker = (props) => (
    <div className="image-picker">
        {props.slides.map((child, index) =>
        <a
        className={props.current === index ? 'activeImage' : 'defaultImage'}
        href={`#${child.id}`} 
        key={index}
        onClick={() => {
            window.location.href = `#${child.id}`
            props.setCurrent(index);
        }}
        >        
        </a>)}
    </div>
)

export default ImagePicker;
