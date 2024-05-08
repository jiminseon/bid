import React from 'react';
import './Join.css';



const InputField = ({ what, text }) => {
    return (

        <input className="InputField" type={what} placeholder={text} >
        </input>

    );
  };
  
  export default InputField;