import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from './Profile/Profile'
import Project from './Project/Project'
import MyProjects from './Project/MyProjects'
import './Dashboard.css'

const Dashboard = (props) => {
  const [project, setProject] = useState([])
  const [profile, setProfile] = useState([])

  useEffect(()=>{
    axios.get('/dashboard')
     .then(res => {
       setProject(res.data)
       setProfile(res.data[0])
     })
 
  },[])

  
  return (
    
    <main>
      <section className="profile">
        <Profile profile={profile}/>
      </section>
      <section className="project">
        <Project project={project}/>
      </section>
      <button variant="primary" type="submit" onClick={(event) => <MyProjects/>}>+ Add project</button>
    </main>
    
  )
}

export default Dashboard;