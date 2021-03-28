import React from 'react';
import 'App.css';

const ImagePicker = (props) => (
        
    <div className="image-picker">
        <a href="#image-1">1</a>
        <a href="#image-2">2</a>
        <a href="#image-3">3</a>
        <a href="#image-4">4</a>
    </div>
)

export default ImagePicker;

{/* 
<div>
    {props.children.map(child => <a>{child}</a>)}
</div> 
*/}