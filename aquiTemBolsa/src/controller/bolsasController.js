const aquiTemBolsas = require("../models/bolsasSchema")


const getBolsas = (req, res) => {
    console.log(req.url)
    aquiTemBolsas.bolsasCollection.find((error, bolsas) => {
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(bolsas)
        }
    })
}

const getById = (req, res) => {
    const idParam = req.params.id
    aquiTemBolsas.bolsasCollection.findById(idParam, (error, bolsas) =>{
        if(error){
            return res.status(500).send(error)
        }else {
            if(bolsas){
                return res.status(200).send(bolsas)
            }else {
                return res.status(404).send("Bolsa não encontrada")
            }
        }
    })
   
}

const criarBolsa = (req, res) => {
    const bolsaBody = req.body
    const bolsas = new aquiTemBolsas.bolsasCollection(bolsaBody)

    bolsas.save((error) => {
        if(error) {
            return res.status(400).send(error)
        }else {
            return res.status(201).send(bolsas)
        }
    })
}

const atualizarBolsa = (req, res) => {
    const idParam = req.params.id
    const bolsaBody = req.body
    const novo = {new: true}

    aquiTemBolsas.bolsasCollection.findByIdAndUpdate(idParam, bolsaBody, novo, (error, bolsas) => {
            if(error){
                return res.status(500).send(error)             
            }else{
                return res.status(200).send({mensagem: 'Bolsa atualizada com sucesso', 
                bolsas })
            }
            
        }

    )
 

}

const deletarBolsa = (req, res) => {
    const idParam = req.params.id
    aquiTemBolsas.bolsasCollection.findByIdAndDelete(idParam, (error, bolsas) => {
        if(error){
            return res.status(500).send(error)
        }else {
            if(bolsas){
                return res.status(200).send("Bolsa excluída")
            }else {
                return res.sendStatus(404)
            }
        }
    })
    
}
   


module.exports = {
    getBolsas,
    getById,
    criarBolsa,
    atualizarBolsa,
    deletarBolsa
}