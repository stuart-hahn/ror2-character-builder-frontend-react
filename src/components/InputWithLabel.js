import React from 'react';

const InputWithLabel = ({ id, label, value, type = "text", onInputChange }) => (
  <div>
    <label htmlFor={id}>{label}: </label>
    <input id={id} type={type} onChange={onInputChange} value={value} />
  </div>
)


export default InputWithLabel;