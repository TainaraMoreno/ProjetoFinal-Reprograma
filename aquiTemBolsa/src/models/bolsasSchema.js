const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bolsasSchema = new Schema ({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    instituicao:{
        type: String,
        required: true
    }, 
    unidade:{ 
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    data_curso: {
        type: String,
        required: true,
    },
    inscricao_bolsa: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }            
           
},
{
    collection: "databolsas"
}

) 


const bolsasCollection = mongoose.model('databolsas', bolsasSchema)
module.exports = {bolsasCollection} 