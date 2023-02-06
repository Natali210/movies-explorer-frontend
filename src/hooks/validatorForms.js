import React, { useCallback } from "react";

export function useValidForm(config) {
  const [values, setValues] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());

    const nameNotValid = !config?.REGEXP[name]?.test(value);
    nameNotValid && config?.INPUTS.includes(name)
      ? setErrors({ ...errors, [name]: config.TEXT[name] })
      : setErrors({ ...errors, [name]: target.validationMessage });
  };
  
  const resetForm = useCallback((newValues = {}, newIsValid = false, newErrors = {}) => {
      setValues(newValues);
      setIsValid(newIsValid);
      setErrors(newErrors);
    },
    [setValues, setIsValid, setErrors ]);
  return { values, isValid, errors, handleChange, resetForm };
}