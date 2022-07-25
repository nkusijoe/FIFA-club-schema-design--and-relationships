const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        trim: true,
        required: [true, 'player must have a name']
    },

    dob: {
        type: Date.toString, 
    },

    nationality: {
        type: String, 
        required: [true, 'player must have a nationality']
    }, 

    footballLicense: {
        type:String,
        required: [true, 'player must have a license']
    }, 

    category: {
        type: String
    },

    currentTeam: {
        type: String,
        default: 'Junior club'
    }, 

    languages: {
        type: String,
    },

    salary: {
        type: Number
    },
    
    extraSalary: {
        type: Number
    },
})


const Player = mongoose.model('player', PlayerSchema)


module.exports = Player
