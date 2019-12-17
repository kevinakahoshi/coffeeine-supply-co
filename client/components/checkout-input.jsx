import React from 'react';

function CheckoutInput(props) {
  const textValue = props.value;
  const name = props.name;
  const placeholderText = props.placeholder;
  const handleChange = props.handleChange;
  const inputType = props.type;
  const isValid = props.isValid;
  const minLength = props.minLength;
  const maxLength = props.maxLength;
  let inputClass = null;

  if (isValid === false && textValue === '') {
    inputClass = 'is-invalid';
  } else {
    if (inputType === 'tel' && isNaN(textValue)) {
      inputClass = 'is-invalid';
    }
  }

  return (
    <input name={name}
      className={`form-control ${inputClass}`}
      placeholder={placeholderText}
      onChange={event => {
        handleChange(event.target.value);
      }}
      type={inputType}
      value={props.value}
      minLength={minLength}
      maxLength={maxLength}
      autoComplete="off" />
  );
}

export default CheckoutInput;
