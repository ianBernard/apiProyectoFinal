const{Router}=require('express');
const router = Router();

//Aca se definen todas las variables globales (las que se usan en mas de una funcion)
var PosicionesEliminadas= new Array(12);
var carton= new Array();
var indice = 0
var numeros = new Array();
const loteCartones = new Array();
var marcado = 0;
var numeroDeCartones=0
var nombre
var TotalDeCartones;
var cartonNominado; 

//la funcion crearCarton() crea el primer carton que se sube a la API, los post y gets trabajan en funcion del carton que se crea en esta funcion
    function crearCarton(){
            indice=0
            for (let i = 0; i < 12; i++) {
                marcado = random(0,27);
                while (PosicionesEliminadas.includes(marcado) ) {
                    marcado = random(0,27);
                }
                PosicionesEliminadas[i]=marcado;
            }
            for (let fila = 0; fila < 3 ; fila++) {
                for(let columna = 0; columna < 9; columna++) {
                    const data= {
                        "Linea":fila,
                        "columna":columna,
                        "valor": random(0,9) + 10 * columna,
                    }
                    numeros[indice]=data   
                    indice++; 
                }
                for (let i = 0; i < 12; i++) {
                    data = numeros[PosicionesEliminadas[i]] || {}
                    data.valor="Posicion eliminada"
                }   
            }
         
        return numeros  
    }
//La funcion random(min, max) es una funcion que esta para ser llamada cada vez que necesite, por si sola no hace nada, pero cada vez que es llamada y se le pasan
// el maximo y el minimo para hacer el random, la funcion empieza a funcionar y calcula el numero random necesitado
    function random(min, max) {
                return Math.floor((Math.random() * (max - min + 1)) + min);
           }  


    //1
//Este primer POST lo que hace escrear un numero random con la funcion random(min,max) entre 1 y un numero pasado previamente por parametro. 
    router.post('/numero_aleatorio', (req,res) => {
        numeroDeCartones = req.body.numero;
        var aleatorio=random(1,numeroDeCartones)
//En "data" se guarda el numero aleatorio sacado en la linea 55 y posteriormente lo muestra
        const data= {
            "Numero aleatorio":aleatorio,
        }
//res.json(data) manda la informacion a la API
        res.json(data)
    })

    //2
//Este post trabaja con el numero random que sale en el post anterior (de linea 53 a 62) y crea los cartones equivalentes al numero pasado por parametros, que es el
// numero random salido en el POST anterior
        router.post('/iniciar_juego', (req,res) => {
        TotalDeCartones = req.body.CantidadDeCartones;
        for (let numeroCarton = 1; numeroCarton <= TotalDeCartones; numeroCarton++) {
//En const carton se agregan datos (tanto el lugar del nombre como el numero del carton) a los que ya estaban previamente cargados(numeros de linea, numero de carton
// y el valor del casillero). El const carton ya estaba definido en la funcion crearCarton().
            const carton= {
                "nombre":"S/N",
                "numeroCarton": numeroCarton,
                "infoCarton":crearCarton(),
            }
            loteCartones[numeroCarton-1]=carton
        }
//Las proximas 2 lineas (80-81) lo que hacen es cambiar el formato de como se estaba haciendo la info que se iba a subir a la API para poder subirla
        var infoString = JSON.stringify(loteCartones);
        var infoJson = JSON.parse(infoString);
//Aqui devuelta volvemos a mandar la informacion a la API
        res.json(infoJson)
    })

    //3
//Este get lo que hace es ponerle nombre a los cartones ya creados anteriormente, habiendo creado la casilla "nombre" en const carton
        router.get('/obtener_carton', (req,res) => {
        nombre=req.body.Nombre
        const cartonConNombre={
            "Nombre": nombre,
            "carton":crearCarton(),
        }
//Otra vez pasando la info a formato json
        var infoString = JSON.stringify(cartonConNombre);
        var infoJson = JSON.parse(infoString);
 //Otra vez mandando la info a la API
        res.json(infoJson)
    })
    //4
//En este post lo que pasa es lo siguiente, se realiza un if para ver si los cartones tienen nombre, mientras tengan nombre, se devuelve solo dicho carton con su
//respectivo nombre, pero si encuentra a un carton sin nombre ("S/N"), devuelve todos los cartones subidos a la API
    router.get('/cartones', (req,res) => {
        if(parametros.has('/cartones/?nombre')){
            for (let index = 0; index < loteCartones.length; index++) {
                cartonNominado = loteCartones[index];
                if (cartonNominado.nombre=='S/N') {
                    cartonNominado.nombre=parametros.get('/cartones/?nombre');
                    loteCartones[index] = cartonNominado;
                    break;
                }
            }
            var infoString = JSON.stringify(cartonNominado);
            var infoJson = JSON.parse(infoString);
            res.send(infoJson);
        }else
        {
            var infoString = JSON.stringify(loteCartones);
            var infoJson = JSON.parse(infoString);
            res.send(infoJson)
        }
    })   
    //5
//Este get es el encargado de generar un numero random y marcarlo dentro de los casilleros que estan
    router.get('/sacar_numero', (req,res) => {
        var numRand=random(1,90)
        var cartoncorriente
        for (let carton = 0; carton < loteCartones.length; carton++) {
            cartoncorriente=loteCartones[carton]
            for (let casillero = 0; casillero < 27; casillero++) {
                if (numRand==cartoncorriente.infoCarton[casillero].valor) {
                    cartoncorriente.infoCarton[casillero].valor="x"
                }
            }
        }
        var infoString = JSON.stringify(loteCartones);
            var infoJson = JSON.parse(infoString);
            res.send(infoJson);
    })
module.exports = router;
