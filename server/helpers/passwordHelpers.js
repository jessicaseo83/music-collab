const bcrypt = require('bcrypt')

const validatePassword =  function(user,password) {
  return bcrypt.compare(password,user.password)
  .then(result => result? user:Promise.reject({status:404,message:"wrong password"}))


}
module.exports = {
  validatePassword
}