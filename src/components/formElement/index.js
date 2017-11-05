import React from 'react';

export default function FormElement(props) {

  const elementProperties = props.elementProperties;


  function buildSelectOptionValues() {
    const values = elementProperties.values;
    const options = values.map((value, index) => 
      <option key={index} value={value}>{value}</option>
    );

    return options;
  }

  function buildElement() {
    console.log('buildElement');

    if(elementProperties.element === "input") {
      return (
        <label htmlFor={elementProperties.name}>
          <input
            type={elementProperties.type}
            step={elementProperties.type === "number" ? "0.01" : null}
            name={elementProperties.name}
            id={elementProperties.name}
            placeholder={elementProperties.placeholder}
            required={elementProperties.type === "checkbox" ? null : "required"}/>
        </label>
      );
    }
    if(elementProperties.element === "select") {
      const options = buildSelectOptionValues();

      return (
        <label htmlFor={elementProperties.name}>
          <select
            name={elementProperties.name}
            id={elementProperties.name}>
            <option value="" disabled defaultValue>Select</option>
            {options}
          </select>
        </label>

      );
    }
  }
  

  return(
    buildElement()
  );
}