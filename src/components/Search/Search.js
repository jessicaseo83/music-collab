import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Map from '../map/map'

const Search = () => {
  const [users,setUsers] = useState();
  useEffect(()=>{
    axios.get('/users')
    .then(res => setUsers(res.data))
    
    
  },[])
  return (
    <>
    <h1>Search</h1>
    <Map users={users} />
    </>
  )
}

export default Search;