<<<<<<< HEAD
import React from "react"
=======
import React from "react";
>>>>>>> 968937df2bb3b3ad02c24b9bfa93c55604272e16
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

