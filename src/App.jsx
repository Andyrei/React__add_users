import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: ""
  })
  const [nameIsValid, setNameIsValid]= useState(false);
  const [surnameValid, setSurnameIsValid]= useState(false);

  const inputOnChangeHandler = (e)=>{
    const {name, value} = e.target;
      setFormData( prevState => {
        return {
          ...prevState,
          [name]: value
        }
      })
      
  }
  const btnOnClickHandler = (e) => {
    e.preventDefault();
    formData.name == "" ? setNameIsValid(true) : setNameIsValid(false);
    formData.surname== "" ? setSurnameIsValid(true) : setSurnameIsValid(false);
    console.log(`name-> ${nameIsValid}`)
  }

console.table(formData)
const nameClass = nameIsValid ? 'input input-bordered  w-full max-w-xs border border-red-500': 'input input-bordered  w-full max-w-xs';
const surnameClass = surnameValid ? 'input input-bordered  w-full max-w-xs border border-red-500': 'input input-bordered  w-full max-w-xs';
  
return (
    <div className="container my-20 mx-auto">
      <h1 className="text-3xl text-center font-bold underline my-20"> Insert new users </h1>
        <div className="grid grid-cols-2 grid-rows-1 space-x-3">
          {/* ADD USERS */}   
          <div className="border border-cyan-200 px-3">
              <p className='text-gray-400'>Add users: </p>        
              <div className="my-4">
                <label htmlFor='name' className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" name='name' onChange={inputOnChangeHandler} placeholder="Type here" className={nameClass} />
              </div>
              <div className="my-4">
                <label htmlFor='surname' className="label">
                    <span className="label-text">What is your last name?</span>
                </label>
                <input type="text" name="surname" onChange={inputOnChangeHandler} placeholder="Type here" className={surnameClass} />
              </div>
              <div className="btn-group my-4">
                <button className='btn btn-primary' onClick={btnOnClickHandler}>ADD User</button>              
              </div>
          </div>
          {/* USERS ADDED */}
          <div className="indicator border border-cyan-200 w-full">
              <span className="indicator-item badge badge-primary">Users: 99+</span>           
              <div className="flex flex-col w-full">
                <p className='text-gray-400'>Users: </p>
                <div className="grid grid-cols-3 px-2">
                  <p className='underline'>Name</p>
                  <p className='underline'>Surname</p>
                  <p className='underline'>Actions</p>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default App
