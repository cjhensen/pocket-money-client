import React from 'react';

export default function FormElement(props) {

  /*****************************************
  NOTE: GitHub Issue #41
  buildElement() is called three times: once on categories load,
  once on add button clicked, and once on submit/close
  Why? Maybe render only if popup is shown, not by default.
  Must have something to do with css properties and showing/hiding.
  *****************************************/
  const elementProperties = props.elementProperties;

  // builds option elements for a select element based on array of values
  function buildSelectOptionValues() {
    const values = elementProperties.values;
    const options = values.map((value, index) => 
      <option key={index} value={value}>{value}</option>
    );

    return options;
  }

  // build a form element based on an object passed in with element properties
  function buildElement() {
    console.log('buildElement');
    console.log('editingValue', elementProperties.editingValue);

    if(elementProperties.element === "input") {
      return (
        <label htmlFor={elementProperties.name}>
          <input
            type={elementProperties.type}
            step={elementProperties.type === "number" ? "0.01" : null}
            name={elementProperties.name}
            id={elementProperties.name}
            placeholder={elementProperties.editingValue !== "" ? elementProperties.editingValue : elementProperties.placeholder}
            required={elementProperties.type === "checkbox" ? null : "required"} />
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