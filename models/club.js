
const {Schema, model, default: mongoose} = require('mongoose')
const clubSchema = new Schema({
      clubName: {
         type: String, 
         required: [true, 'club Name is required']
 }, 
      clubPlayers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player"
      },
      clubManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager"
},
      clubEmail: { 
        type: String,
        required: true
 }, 
      clubFax: { 
         type: String, 
         required: true
 }, 
      address: { 
         type: String, 
         required: true
 }
})
const Club = model('club', clubSchema)
module.exports = Club