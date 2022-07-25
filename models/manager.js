
const {Schema, model} = require('mongoose')
const managerSchema = new Schema({
      firstName: {
         type: String, 
         required: [true, 'first Name is required'],
}, 
      lastName: {
        type: String, 
        required: [true, 'last Name is required'] ,
},
      license: {
         type: String,
         required: true
      },
      dob: {
         type: Date.toString, 
},
      email: { 
        type: String,
        required: true
 }, 
      phone: { 
         type: String, 
         required: true
 }, 
      address: { 
         type: String, 
         required: true
 },
      salary: {
         type: Number,
         required: true
},
})
const Manager = model('manager', managerSchema)
module.exports = Manager