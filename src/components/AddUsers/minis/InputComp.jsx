import React, { useState } from 'react'

export default function InputComp({name, inputData, setInputData, placeholder}) {



  
  const rgxCheck = /^(([\w]){0,2}([\'\s]?)+(\w){3,20})$/;

  /* ON CHANGE HANDLER */
  const checkInputErrors = (e) => {
    if(!rgxCheck.test(e.target.value)){
      setInputData((prevState)=>{
        return{
          ...prevState,
          key: e.target.name,
          fieldHasError: true,
          fieldValue: e.target.value
        }
      });
    }else{
      setInputData((prevState)=>{
        return{
          ...prevState,
          key: e.target.name,
          fieldHasError: false,
          fieldValue: e.target.value
        }
      });
    }
  };


  /* CSS CLASSES */
  const inputClass = inputData.fieldHasError ? 'input input-bordered  w-full max-w-xs border border-red-500': 'input input-bordered  w-full max-w-xs';
  const labelClass = inputData.fieldHasError ? 'label-text capitalize text-error' : 'label-text capitalize';
  const errorMsg = inputData.fieldHasError ? <p className='text-sm mt-1 opacity-70 text-error'>The field {name} is not corect</p> : "";
  
  return (
    <>
      <div className="my-2">
        <label htmlFor={name} className="label">
            <span className={labelClass} >{name}</span>
        </label>
        <input 
          type="text" 
          name={name} 
          onChange={checkInputErrors}
          placeholder={placeholder} 
          className={inputClass}
          />
        {errorMsg}
      </div>
    </>
  )
}
