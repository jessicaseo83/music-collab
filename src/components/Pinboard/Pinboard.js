import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios'
import AdInd from "./Form.js"
import Image from 'react-bootstrap/Image';

//each ad needs to have a max number of available positions
//EX: Looking for two guitarists

//a user can only apply if they are qualified 
//a sound engineer that hasn’t said he/she plays guitar cannot apply for a guitarist position

//a user can see how many positions need to be filled

//when a user joins an ad, he/she’s profile_pic appears as part of the ad. 

// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';

// export default function GroupAvatars() {
//   return (
//     <AvatarGroup max={{ad.position_available}}>
//       <Avatar src={user.profile_pic} />
//       <Avatar src={user.profile_pic} />
//       <Avatar src={user.profile_pic}/>
//       <Avatar src={user.profile_pic}/>
//       <Avatar src={user.profile_pic} />
//     </AvatarGroup>
//   );
// }










const Pinboard = (props) => {
  const [ads,setAds] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  useEffect(()=>{
    Promise.all([axios.get('/ads'), axios.get('/collaborators')])
    .then(res => setAds(res.data))
    .then(res => setCollaborators(res.data))
    

  },[])

const adList = ads.map (ad => <AdInd ad={ad}/>)
const collabList = collaborators.map (collaborator => <AdInd collaborator={collaborator}/>)

return (

<>
{adList}
{collabList}
</>
)
}


export default Pinboard;