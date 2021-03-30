import React from 'react';
import 'App.css';

const Arrows = (props) => 
(
    <div>
        <a  
            href={`#${props.prevId}`} 
            className="left-arrow" 
            onClick={props.prev}
            >
            &lt;
        </a>
        <a 
        href={`#${props.nextId}`} 
        className="right-arrow"
        onClick={props.next}
        >
            &gt;
        </a>
    </div>
)

export default Arrows;

