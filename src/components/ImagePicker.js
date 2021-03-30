import React from 'react';
import 'App.css';


const ImagePicker = (props) => (
    <div className="image-picker">
        {props.slides.map((child, index) => <a href={`#${child.id}`} key={index}>{index+1}</a>)}
    </div>
)

export default ImagePicker;

{/* 
*/}