const { userModel } = require("../models")

exports.userRegister = async (req) => {
    const { query, params, body } = req
    const { firstname, lastname, dOB, isStudent, collageName, mobile, location, email, username, password, age, lookingJob, findingJobTitles, remoteWorking, job} = body
    let role = body.role

    // if (!firstname) throw new Error("NAME NOT present");
    // if (!job) throw new Error("job NOT present");
    // if (!email) throw new Error("email NOT present")
    // if (!username) throw new Error("username NOT present");
    if (!firstname || !lastname || !email || !username || !password || !job || !dOB ) throw new Error("you have kept any of the following Fields empty \n firstname, lastname \n email\n password\n username \n password\n Date of Birth\n job")

    if (!role) 
        console.log("adding role as user By default")
        role= "user"

    return await userModel.create({
        // Personal Info
        firstname,
        lastname,
        dOB,
        isStudent,
        collageName,
        mobile,
        location,
        email,
        username,
        password,
        age,
        // job data 
        lookingJob,
        findingJobTitles,
        remoteWorking,
        job,
        role
    })


}

exports.findUsers = async (req) => {
    const job = req.query.job
    let criteria = {};

    if (job) {
        criteria.job = job;
    }

    console.log("See on postMan for Results")
    return await userModel.find(criteria)

}

exports.deleteUser = async (req) => {

    const userName = req.params.username
    if (!userName) throw new Error("Username not present");

    return await userModel.findOneAndDelete({ username: userName })


}

exports.isAdmin = async (req)=>{
    const userName= req.usern
    const roless = await userModel.find({username : userName })
    if( roless.role =="admin") return true
        
    else return false
    
}

