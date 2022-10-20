const express = require('express');
const app = express();
app.use(express.json());

const usuarios =[
    {idUsuario: 1, usuario: 'Big Fella', constrasena: 'Big Fella 123'},
]

const rutinas =[
    {IdRutina: 1, Upvotes:100, Downvotes:100, Visitas: 200, Descrippcion: 'description', Imagen:'url',Repeticiones: 10, Series:3, 
    IdUsuario: 1, Nombre: 'flexiones', }
]


app.get ('/',(req,res) => {
    res.send ('Node JS api');
})

app.get ('/usuarios',(req,res) => {
    res.send (usuarios);
})

app.get ('/rutinas',(req,res) => {
    res.send (rutinas);
})

app.get ('/usuarios/:id',(req,res) => {
    const usuarios = usuarios.find(c=>c.id === parseInt(req.params.id))
    if(!usuarios) return res.status(404).send ("usuario not found");
    else res.send (usuarios);
})

app.get ('/usuarios/:id',(req,res) => {
    const usuarios ={
        idUsuario: usuarios.length + 1,
        usuarios: req.body.usuarios,
        constrasena: req.body.constrasena
    }
    usuarios.push(usuarios);
    res.send (usuarios);
})

app.delete ('/usuarios/:id',(req,res) => {
    const usuarios = usuarios.find(c=>c.id === parseInt(req.params.id))
    if(!usuarios) return res.status(404).send ("usuario not found");
    const index= usuarios.indexOf(usuarios)
    usuarios.splice (index, 1);
    res.send (usuarios);
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log('listening on port', {port}));