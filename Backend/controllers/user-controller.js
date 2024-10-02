const user = require("../models/user-model")
const skill = require("../models/skill-model")
const { userService } = require("../services")
const { skillServices } = require("../services")
const { isAdmin } = require("../services/user-service")


exports.createUser = (req,res,next) => {
    try {
       const register =  userService.userRegister(req)  
       
       res.status(201).send(register)
    } catch (error) {
        console.log("Creat User: ", error)
    }
}

exports.findUsers =async (req,res)=>{
    try {
        const findings= await userService.findUsers(req)
        res.status(200).send(findings)
    } catch (error) {
        console.log("Find User: ", error)
    }
}

exports.terminateUser = async (req,res,next) => {
    try {
        const deleting= await userService.deleteUser(req)
        res.status(200).send("Deleted", deleting)
    } catch (error) {
        console.log("Terminatin User errror: ", error)
    }
}

exports.createSkill =async (req,res,next) => {
    try {
        
        const Skill =  await skillServices.addNewSkill(req)

        if(isAdmin(req)) res.status(400).send(`User '${req.body.username}' is not admin`)
        res.status(201).send("Created Skill");

    } catch (error) {
        console.error("Controller not Able to respond:", error )
    }
}

