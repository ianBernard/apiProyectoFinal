const express = require('express');
const app = express();
const morgan =require('morgan');

//configuracion
//Aca se establece el numero de puerto
app.set('port', process.env.PORT || 3000)//te dan un puesto definido, es por eso que si existe el puerto definido, y esta ocupado, se establece el puerto 3000 como 
//opcional
app.set('json spaces', 2)

//middelware
// El midelware va a procesar los datos antes de que lleguen a la API
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());//Es lo que permite hacer entender al server el formato json

//routes
//crea las rutas para la API
app.use(require("./ruta/index"))
app.use('/api/carton',require("./ruta/carton"))

//empezando el server
//aca los datos son mandados al puerto 3000
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
