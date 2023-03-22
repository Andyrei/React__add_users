import { useEffect, useRef, useState } from 'react'
import './App.css'
import AddUsers from './components/AddUsers'
import ShowUsers from './components/ShowUsers'


const FETCH_URL = "https://test-infobasic-defauLt-rtdb.europe-west1.firebasedatabase.app";
function App() {
  const [users, setUsers] = useState(); // USERS FROM DB
  const [currentUser, setCurrentUser] = useState(); // CURRENT USER  FRO MODIFY AND DELETE FUNCS
  
// GET USERS FROM DB
  useEffect(() => {
    fetch(FETCH_URL + '/users.json', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        const fetchedUsers = [];
        Object.keys(data).forEach(key => fetchedUsers.push({...data[key], id: key }));
        setUsers(fetchedUsers);
      }
    })
    .catch(error => console.error(error))
  }, [])

  const postUser = (user) =>{
    fetch(`${FETCH_URL}/users.json`, {
      method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(user),
    })
    .then(result=>{result.json()})
    .then(data=>{
      setUsers((prevUsers)=>[...prevUsers, {...user, id: data?.name} ])
    })
    .catch((error) => {console.error(error)})
  }
  
return (
    <div className="max-w-5xl my-20 mx-auto">
      <h1 className="text-3xl text-center font-bold underline my-20"> Insert new users </h1>
        <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 space-x-3">
          <AddUsers 
            postUser={postUser}
          
          />
          <ShowUsers users={users} usersLen={users && Object.keys(users).length}/>
        </div>
    </div>
  )
}

export default App
