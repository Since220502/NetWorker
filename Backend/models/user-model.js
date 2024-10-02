const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,

    },
    role: {
        type : String,
        require : true,
    },

    password: {
        type: String,
        require: true,
        
    },
    age: {
        type: Number
    },



    mobile :{
        type :Number
    },
    location : {
        type : String
    }, 

    isStudent : {
        type :Boolean,
        // require : true
    },

    dOB : {
        type : Date,
        require : true
    },

    collageName : {
        type : String,
        // require : true
    }, 
    
    lookingJob : {
        type : Boolean
    },
    findingJobTitles :{
        type : String
    },
    remoteWorking :{
        type: Boolean
    },

    job: {
        type: String,
        require: true,

    },

    skillset : [{
        type: mongoose.Schema.Types.ObjectId, // Reference to Skill IDs
        ref: 'Skill',
    }]
    


});

const user = mongoose.model('user' , userSchema)

module.exports = user