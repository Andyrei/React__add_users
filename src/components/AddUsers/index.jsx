import { useEffect, useRef, useState } from 'react'
import React from 'react'
import InputComp from './minis/InputComp';

const FETCH_URL = "https://test-infobasic-defauLt-rtdb.europe-west1.firebasedatabase.app";

export default function AddUsers({postUser}) {
  
  const [btnDisabled, setBtnDisabled] = useState(true);

  /* Name useState variable */
  const[inputNameData, setInputNameData] = useState({
    fieldHasError: false,
    fieldValue: ""
  });

  /* Surname useState variable */
  const[inputUsernameData, setInputUsernameData] = useState({
    fieldHasError: false,
    fieldValue: ""
  });


/* BUTTON HANDLER */
const btnOnClickHandler = (e) => {
  e.preventDefault();
  let data = {
    name: inputUsernameData.fieldValue,
    username: inputUsernameData.fieldValue
  }
  postUser(data)
}

/* This is handling the button. It will enable it if there are no errors*/
useEffect(() => {
      JSON.parse(localStorage.getItem('itemsArray')) || []
      if((inputUsernameData.fieldValue == "" || inputNameData.fieldValue == "") || (inputUsernameData.fieldHasError || inputNameData.fieldHasError)){
        setBtnDisabled(true)
      }else{
        setBtnDisabled(false)
      }
  },[inputUsernameData.fieldValue, inputNameData.fieldValue]);

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
          name={"username"}
          placeholder={"Insert username here"}
          setInputData={setInputUsernameData}
          inputData={inputUsernameData}
        />
        <div className="btn-group my-4 w-full">
          <button className='btn btn-primary mx-auto' disabled={btnDisabled} onClick={btnOnClickHandler}>ADD User</button>
        </div>
      </div>
    </>
  )
}
