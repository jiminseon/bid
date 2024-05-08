import React from 'react';
import './Join.css';
import InputField from './InputField';
import InputWhat from './InputWhat';

const InputContainer = ({ what, text }) => {
  return (
    <div className="InputContainer">
        <InputWhat what={what}></InputWhat>
        <InputField text={text} what={what}></InputField>
    </div>
  );
};

export default InputContainer;


