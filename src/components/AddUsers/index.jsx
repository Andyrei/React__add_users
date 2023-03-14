import { useEffect, useState } from 'react'
import React from 'react'
import InputComp from './minis/InputComp';

export default function AddUsers() {
  
  /* REGEX CONTROL */
  const rgxCheck = /^(([\w]){0,2}([\'\s]?)+(\w){3,20})$/;
  const [userData, setUserData] = useState({
    name: {
      fieldHasError: false,
      fieldValue: ""
    },
    surname: {
      fieldHasError: false,
      fieldValue: ""
    }
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const[inputNameData, setInputNameData] = useState({
    key: "",
    fieldHasError: false,
    fieldValue: ""
  });

  const[inputSurnameData, setInputSurnameData] = useState({
    key: "",
    fieldHasError: false,
    fieldValue: ""
  });


/* BUTTON HANDLER */
const btnOnClickHandler = (e) => {
  e.preventDefault();
  //todo: ON CLICK should "PRINT" to SHOW USER interface
}

  /* BUTTON */
useEffect(() => {
      if((inputSurnameData.fieldValue == "" || inputNameData.fieldValue == "") || (inputSurnameData.fieldHasError || inputNameData.fieldHasError)){
        setBtnDisabled(true)
      }else{
        setBtnDisabled(false)
      }
  },[inputSurnameData.fieldValue, inputNameData.fieldValue]);

return (
    <>
      {/* ADD USERS */}
      <div className="border border-cyan-200 px-3">
        <p className='text-gray-400 mb-4'>Add users: </p>
        <InputComp
          name={"name"}
          placeholder={"Insert name here"}
          setInputData={setInputNameData}
          inputData={inputNameData}
       />
        <InputComp
          name={"surname"}
          placeholder={"Insert surname here"}
          setInputData={setInputSurnameData}
          inputData={inputSurnameData}
        />

        <div className="btn-group my-4">
          <button className='btn btn-primary' disabled={btnDisabled} onClick={btnOnClickHandler}>ADD User</button>
        </div>
      </div>
    </>
  )
}
