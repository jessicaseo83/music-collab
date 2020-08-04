module.exports= function(db){
  const getUserByEmail = function(email) {
    const query= {
      text:"SELECT * From users WhERE email = $1",
      values:[email.trim().toLowerCase()]
    }
    return db.query(query)
    .then(result => result.rows[0]? result.rows[0]:Promise.reject({status:404,message:"user does not exist"}))
    
  
  }
  return {
    getUserByEmail
  }
}