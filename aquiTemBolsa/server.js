const app = require("./src/app")

const PORT = 8080 


app.listen(PORT, function(){
    console.log(`Bem Vindo ao Aqui Tem Bolsas! Nossa porta é ` + PORT)
})