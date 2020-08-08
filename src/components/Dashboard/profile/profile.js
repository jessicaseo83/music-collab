import React from "react"
import './Profile.css';

export default function Profile (props){
  const user = props.profile;
  console.log(user)

  return (
    <div>

      <img className="pic" src={user.profile_pic} />
      <p>{user.name}</p>
      <p>{user.role}</p>
      <p>{user.city}</p>
    </div>
  )
}

