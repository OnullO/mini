const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    username:String,
    password:String,
    token:String
})

const Models={
    User:mongoose.model('User',UserSchema)
}
mongoose.connect('mongodb://localhost/mimi')
const db = mongoose.connection
db.on('error', function () {
  console.log('Database connection error.')
})
// db.once('open', function () {
//   console.log('The database has connected.')
//   initialize()
// })

module.exports=Models