import User from '../models/User.js'

/* responsavel por recuperar ou buscar  os usuarios no db */
async function getUsers(req, res) {
  const users = await User.find() /*buscar por todos os usuarios */
  return res.status(200).json(users)
}

/* responsavel por criar usuarios  */
async function createUsers(req, res) {
  const usuario = req.body
  const newUsuario = await User.create(usuario)
  return res.status(201).json(newUsuario)
}

/* responsavel por deletar usuario criado */
async function deleteUser(req, res) {
  const id = req.params.id
  await User.findByIdAndDelete({ _id: id }) /* procurar pelo id e deletar   */
  return res.status(200).json({ res: 'usuario foi deletado' })
}

export { createUsers, getUsers, deleteUser }
