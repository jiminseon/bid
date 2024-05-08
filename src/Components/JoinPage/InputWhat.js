import React from 'react';
import './Join.css';



const InputWhat = ({ what }) => {
    return (

        <span className="InputWhat">
            <img src="image/join-red-dot.png" className="join-red-dot" alt="dot"></img>
            {what}
        </span>

    );
  };
  
  export default InputWhat;