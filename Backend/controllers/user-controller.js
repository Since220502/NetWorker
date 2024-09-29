const user = require("../models/user-model")
const { userService } = require("../services")


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

