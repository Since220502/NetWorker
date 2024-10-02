const router = require("express").Router();
const {userController} = require("../controllers")

router.post("/", userController.createUser);

router.get("/", userController.findUsers);

router.delete("/:username" , userController.terminateUser);

router.put("/", userController.createSkill);


module.exports = router
