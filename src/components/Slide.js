import React from 'react';
import 'App.css';

const Slide = (props) => (
<div className="slide" id={props.id}>
{/*             <div className="left"></div>
 */}
    {props.children}
        {/* <div className="center"></div>
        <div className="right"></div> */}
</div>
);

export default Slide;