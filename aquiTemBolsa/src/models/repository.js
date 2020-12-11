const mongoose = require("mongoose")
//mongoose.Promise = global.Promise;
const DB_URL = "mongodb://localhost:27017/aquitembolsas"

const connect = () => {
    mongoose.connect(DB_URL, { userNewUrlParser: true })
    const connection = mongoose.connection
    connection.on("error", () => console.error("Error ao conectar com o MongoDB"))
    connection.once("open", () => console.log("Estmos conectados"))
}

module.exports = { connect }