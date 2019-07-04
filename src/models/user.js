const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User',{
    nome: {
        type : String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,

        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email inválido')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('senha')) {
                throw new Error('Senha não pode conter "senha"')
            }
        }


    },
    idade:{
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('A idade deve ser positiva')
            }
        }
    }
})

module.exports = User 