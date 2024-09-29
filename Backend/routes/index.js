const router = require("express").Router();

router.use("/user", require("./user-route") );

// router.get("/", (req, res) => {
//     res.send("Welcome to Linkedin");
//   });
  
module.exports= router;

