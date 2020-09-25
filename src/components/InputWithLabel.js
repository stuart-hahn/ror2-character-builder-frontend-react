import React from 'react';

const InputWithLabel = ({ id, label, value, type = "text", onInputChange }) => (
  <div className="ui icon input">
    <input id={id} type={type} onChange={onInputChange} value={value} placeholder={`${label}...`} />
    <i className="search icon"></i>
  </div>
)


export default InputWithLabel;