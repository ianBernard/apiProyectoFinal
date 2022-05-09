const express = require('express');
const app = express();
const morgan =require('morgan');

//configuracion
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//middelware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require("./ruta/index"))
app.use('/api/carton',require("./ruta/carton"))

//empezando el server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});