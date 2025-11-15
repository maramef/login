// import users from '../data/Users.json'
import { useDispatch } from 'react-redux'
import { logout } from "../store/authSlice"
import React, {useEffect, useState} from 'react'


function Home({user, token}) {
  const dispatch = useDispatch()
  const [users, setUsers] =useState([])
  const [error, setError]= useState(null)


  useEffect(() => {
    const fetchUsers = async() => {
      console.log("===================================")
      console.log("IN THE FETCH USERS")
      console.log("===================================")
      try{
      const response = await fetch('http://localhost:3000/api/users',{
      headers:{
        'Authorization' :`Bearer ${token}`,
        'Content-Type':`application/json`,
      },
    });
    if (!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch users');
    }
    const data = await response.json();
    setUsers(data);

    }catch(err){
      setError(err.message)
    }
    }
    if (token) fetchUsers();
  },[token])  
  
  
    return (
    <div>
    <h1>Welcome {user.name}</h1>
    <button  onClick={() => dispatch(logout())} >Logout</button>
    <h3>Users List</h3>
    {error && <p style = {{color :'red'}}>{error}</p>}
    {!error && users.length === 0 && <p>Loanding users...</p>}

    <ul>
      {users.map((u) => (
        <li key ={u.id}>
          {u.name} ({u.email}) - Age :{u.age}
        </li>
      ))}
    </ul>
    </div>
  )
    }
  


export default Home