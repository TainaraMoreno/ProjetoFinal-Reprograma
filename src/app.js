/*const express = require("express")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

const database = require("./models/repository")
database.connect()

const router = require("./routes/bolsasRoute")

//app.use("/", index)
app.use("/bolsas", router)



module.exports = app */

const express = require('express')
const app = express()
const db = require("./configs/database") 
const bodyParser = require('body-parser')

db.connect()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const router = require("./routes/bolsasRoute") 


app.use("/bolsas", router)

 

module.exports = app



