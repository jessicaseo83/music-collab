module.exports= function(db){
  const getUserByEmail = function(email) {
    const query= {
      text:"SELECT * From users WHERE email = $1",
      values:[email.trim().toLowerCase()]
    }
    return db.query(query)
    .then(result => result.rows[0]? result.rows[0]:Promise.reject({status:404,message:"user does not exist"}))
    
  
  }

  const getAllUsers = function() {
    const query= {
      text:"SELECT * From users",
    }
    return db.query(query)
    .then(result =>  result.rows)

  }
  const saveUser = function(info,location) {
    const query = {
      text:`INSERT INTO users (name, password, email, date_of_birth, city, postal_code, lat, lng, role, profile_pic)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) Returning *`,
      values:[info.name,info.password,info.email,info.birthday,info.city,info.postalCode,location.lat,location.lng,info.role,info.profilePic]
    }

      return db.query(query)
      .then(res => res.rows[0])

  }

 const getProject = function () {
  const query = {
    text: `SELECT projects.*, users.name, users.role, users.city, users.profile_pic FROM projects 
          JOIN users ON projects.user_id = users.id 
          WHERE users.id = 8`
  }
  return db.query(query)
  .then(result => result.rows)
}
  
  return {
    getUserByEmail,
    getAllUsers,
    saveUser,
    getProject
  }
}