/* imporntando o banco de dados */
import mongoose from 'mongoose'

async function connectDb() {
  await mongoose.connect(
    'mongodb+srv://RAILTON:vAux2hpdVOcgdqBD@cluster0.rqhgqwj.mongodb.net/?retryWrites=true&w=majority'
  )
}

export default connectDb
