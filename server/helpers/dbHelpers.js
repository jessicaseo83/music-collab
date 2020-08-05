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
      text:"SELECT id,name,email,city,postal_code,role,profile_pic From users",
    }
    return db.query(query)
    .then(result =>  result.rows)

  }
  return {
    getUserByEmail,
    getAllUsers
  }
}