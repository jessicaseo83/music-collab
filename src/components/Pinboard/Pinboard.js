import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import AdInd from "./Form.js"
import Image from 'react-bootstrap/Image';


const Pinboard = (props) => {
  const [ads,setAds] = useState([]);
  useEffect(()=>{
    axios.get('/ads')
    .then(res => setAds(res.data))

  },[])

const adList = ads.map (ad => <AdInd ad={ad}/>)

return (

<>
{adList}
</>
)
}


export default Pinboard;