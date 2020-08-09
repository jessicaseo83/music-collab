import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Map from "./Map/Map.js"
import Button from 'react-bootstrap/Button'
import "./Search.css"
import UserInd from "./list/User.js"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const Search = (props) => {
  const [users,setUsers] = useState([]);
  const [role,setRole] = useState("");
  const [city,setCity] = useState("");
  const [filteredUsers,setFilteredUsers] = useState([]);
  const [view,setView]=useState("list");
  
  const clearFilters = function () {
    setCity("")
    setRole("")
  }


  useEffect(()=>{
    axios.get('/users')
    .then(res => {
      setUsers(res.data)
      setFilteredUsers(res.data)
    }) 
  },[])
  
  useEffect(() => {
    let usersArray = users;
    if (city) {
       usersArray = usersArray.filter(user => user.city === city)
     
    };

    if (role) {
      usersArray = usersArray.filter(user => user.role === role)
    }

    setFilteredUsers(usersArray)
  
  },[city,role])


const userList = filteredUsers.map (user => <UserInd key={user.id} user={user}/>)

// dropdown button handlers
const cityChange = (event) => {
  setCity(event.target.value);
};

const roleChange = (event) => {
  setRole(event.target.value);
};

const classes = useStyles();

return (

<section className="main">
  
  <section className="sidebar"/>
  <section className="map_list">
  
<section>
  <FormControl className={classes.formControl}>
  <InputLabel id="cityfilter">Role</InputLabel>
    <Select
      labelId="rolefilter"
      id="role"
      value={role}
      onChange={roleChange}
    >
      <MenuItem value="Musician">Musician</MenuItem>
      <MenuItem value="Producer">Producer</MenuItem>
      <MenuItem value="Songwriter">Songwriter</MenuItem>
      <MenuItem value="Sound Engineer">Sound Engineer</MenuItem>
    </Select>
  </FormControl>
  <FormControl className={classes.formControl}>
    <InputLabel id="cityfilter">City</InputLabel>
    <Select
      labelId="cityfilter"
      id="city"
      value={city}
      onChange={cityChange}
    >
      <MenuItem value="Montreal">Montreal</MenuItem>
      <MenuItem value="Toronto">Toronto</MenuItem>
      <MenuItem value="Ottawa">Vancouver</MenuItem>
      <MenuItem value="Ottawa">Ottawa</MenuItem>
    </Select>
    
  </FormControl>
<Button className="filter-btn" type="button" onClick={clearFilters}> Clear All Filters</Button>
</section>

<form onChange={(event) => setView(event.target.value)}>

<input className="map-btn" type="radio" id ="map" name="view" value="map" ></input>
<label for="map">Map</label>
<input className="list-btn" type="radio" id ="list" name="view" value="list"></input>
<label for="list">List</label>
</form>



  {view ==="map" &&<Map users={filteredUsers} city={city} />}
  {view ==="list" && userList}

  </section>
</section>
)
}

// dynamic rendering
// map value ==2 and list ==4 


export default Search;

{/* <select id="role" className="search_filter" onChange={(event)=>setRole(event.target.value)} value ={role}>
      <option value ="" selected  > Select a role</option>
      <option>Musician</option>
      <option>Sound Engineer</option>
      <option>Songwriter</option>
</select>
 */}

{/* <select id="city" className="search_filter" onChange={(event)=>setCity(event.target.value)} value ={city}>
      <option value="" selected  > Select a city</option>
      <option value="Montreal">Montreal</option>
      <option value = "Toronto">Toronto</option>
      <option value ="Vancouver">Vancouver</option>
      <option value ="Ottawa"> Ottawa</option>
</select> */}