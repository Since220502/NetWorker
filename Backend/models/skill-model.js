const mongoose = require("mongoose");

const skillSchema =  new mongoose.Schema({
    
    skillName : {
        type : String,
        require : true,
        

    }, 
    proficiency : {
        type : String,
        enum :['Studing','Beginner', 'Intermediate', 'Advanced', 'Expert'], 
        require : true,
        
    },

    expirienceYear : {
        type : Number,
        require  : true,
    }
},)


const skill = mongoose.model('skills' , skillSchema)

module.exports = skill