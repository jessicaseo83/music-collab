import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import AdInd from "./Form.js"


const Pinboard = (props) => {
  const [ads,setAds] = useState([]);
  useEffect(()=>{
   axios.get('/ads')
    .then((res) => setAds(res.data))
  },[])
const adList = ads.map (ad => <AdInd key={ad.id} ad={ad}/>)


return (

<>
<div className="text">
  <h3>Looking for a project? Join one of these</h3>
</div>
{adList}
</>
)
}


export default Pinboard;