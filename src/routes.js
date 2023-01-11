import { Router } from 'express'
import {
  getUsers,
  createUsers,
  deleteUser
} from './controllers/UserController.js'

const rotas = Router()

rotas.get('/users', getUsers)
rotas.post('/users', createUsers)
rotas.delete('/users/:id', deleteUser)

export default rotas
