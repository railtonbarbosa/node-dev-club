import express from 'express'

import connectDb from './database/db.js'

import rotas from './routes.js'

const app = express()

app.use(express.json())
app.use(rotas)

connectDb()
  .then(() => {
    app.listen(3000, () =>
      console.log('servidor rodando e banco de dados conectado')
    )
  })
  .catch(error => console.log(error))
