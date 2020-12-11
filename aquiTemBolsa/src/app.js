const express = require("express")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

const database = require("./models/repository")
database.connect()

//const index = require("./routes/index")
const router = require("./routes/bolsasRoute")

//app.use("/", index)
app.use("/bolsas", router)



module.exports = app 
//https://aquitembolsas.herokuapp.com/




