console.log("hello world!")

const DBUsuarios = require('/Usuarios')

import getUsuarios from './getInfoBBD'
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
var app = express()
var router = express.router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)
router.router(DBUsuarios).get(((req, res)=>{
    DBUsuarios.getUsuarios().then(result =>{
        res.json(result[0])
    })        
}))

var puertocnx = process.env.PORT || 3000