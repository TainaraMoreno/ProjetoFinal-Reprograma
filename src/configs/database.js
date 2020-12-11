/*const mongoose = require("mongoose")
//mongoose.Promise = global.Promise;
const DB_URL = "mongodb://localhost:27017/aquitembolsas"

const connect = () => {
    mongoose.connect(DB_URL, { userNewUrlParser: true })
    const connection = mongoose.connection
    connection.on("error", () => console.error("Error ao conectar com o MongoDB"))
    connection.once("open", () => console.log("Estmos conectados"))
}

module.exports = { connect }*/

const mongoose = require('mongoose')
const dotEnv = require('dotenv') 

dotEnv.config()
const MONGO_URI = process.env.MONGO_URI

const connect = () => {
  mongoose.connect(MONGO_URI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  const connection = mongoose.connection
  connection.on('error', () => console.error('Erro ao se conectar!'))
  connection.once('open', () => console.log('Estamos conectadas!'))
}

module.exports = { connect }