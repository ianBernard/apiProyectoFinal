import express from 'express'
import config from './config'
import Usuariosget from './controllers/products.controllers'

const app = Usuariosget

//settings
app.set('port', config.port || 3000)

export default app