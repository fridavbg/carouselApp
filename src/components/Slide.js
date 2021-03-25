import React from 'react';
import 'App.css';


const Slide = (props) => (
<div className="slide" id={props.id}>
    {props.children}
</div>
);

export default Slide;