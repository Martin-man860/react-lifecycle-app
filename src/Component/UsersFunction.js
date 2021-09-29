import axios from "axios";
import React, { useEffect,useState } from "react";




function UsersFunction(){
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const res= await axios.get("http://jsonplaceholder.typicode.com/users")

        setUsers(res.data);
    }

useEffect(()=>{
    getUsers();
    return (
        setUsers([])
    )
}, [])

  return( 
    users.map((user) => {
        return<div style={{backgroundColor: 'dodgerblue'}}>
        <h1 key={user.id}>{user.name}</h1>
        <h2 key={user.id}>{user.username}</h2>
        <h3 key={user.id}>{user.email}</h3>
        </div>
    })
  )
}

export default UsersFunction;