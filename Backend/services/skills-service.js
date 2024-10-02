const { skillModel } = require("../models")
const { userModel } = require("../models")
const { isAdmin } = require("./user-service")

exports.addNewSkill = async (req) => {
    try {
        const {query, params,body }=req
        const {username, skillName, proficiency, expirienceYear }=body

        if(isAdmin(req)) throw new Error(`You '${username}' are not a Admin`)

        const Skill = new skillModel({ skillName, proficiency, expirienceYear });
        await Skill.save();
        console.log(`Added skill '${skillName}' with level '${proficiency}'.`);
        return Skill._id; // Return the ID of the newly created skill
    } catch (error) {
        console.error("Error adding skill:", error);
    }
}
