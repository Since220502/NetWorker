require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
// const startup = require("./startup/routes")

app.use(express.urlencoded())
app.use(express.json())
app.use(cors());
app.use(require("./routes"))



mongoose.connect(process.env.DB).then(() => {console.log("Connected to the database")});
app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}`)});







