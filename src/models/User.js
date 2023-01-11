import mongoose from 'mongoose'

const esquemaDeUsuario = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  createadAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Usuario', esquemaDeUsuario)
/* estamos dando um nome para esse esquema de usuario que é : Usuario */
