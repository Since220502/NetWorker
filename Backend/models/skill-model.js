const mongoose = require("mongoose");

const skills =  new mongoose.Schema({
    skillName : {
        type : String,

    }, 
    proficiency : {
        type : String,
        enum :['Studing','Beginner', 'Intermediate', 'Advanced', 'Expert']
        
    },

    expirienceYear : {
        type : Number
    }
})