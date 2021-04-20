import React from 'react';
import 'App.css';

const Arrows = (props) => 
(
    <div>
        <button  
            className="left-arrow" 
            onClick={props.prev}
            >
            &lt;
        </button>
        <button
            className="right-arrow"
            onClick={props.next}
        >
            &gt;
        </button>
    </div>
)

export default Arrows;

