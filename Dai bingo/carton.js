const{Router}=require('express');
const router = Router();

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

    function random(min, max) {
                return Math.floor((Math.random() * (max - min + 1)) + min);
           }  

    //1
    router.post('/numero_aleatorio', (req,res) => {
        numeroDeCartones = req.body.numero;
        var aleatorio=random(1,numeroDeCartones)
        const data= {
            "Numero aleatorio":aleatorio,
        }
        res.json(data)
    })

    //2
    router.post('/iniciar_juego', (req,res) => {
        TotalDeCartones = req.body.CantidadDeCartones;
        for (let numeroCarton = 1; numeroCarton <= TotalDeCartones; numeroCarton++) {
            const carton= {
                "nombre":"S/N",
                "numeroCarton": numeroCarton,
                "infoCarton":crearCarton(),
            }
            loteCartones[numeroCarton-1]=carton
        }
        var infoString = JSON.stringify(loteCartones);
        var infoJson = JSON.parse(infoString);
        res.json(infoJson)
    })
    //3
    router.get('/obtener_carton', (req,res) => {
        nombre=req.body.Nombre
        const cartonConNombre={
            "Nombre": nombre,
            "carton":crearCarton(),
        }
        var infoString = JSON.stringify(cartonConNombre);
        var infoJson = JSON.parse(infoString);
        res.json(infoJson)
    })
    //4
    router.get('/cartones', (req,res) => {
        const parametros=new URLSearchParams(req.url)
        console.log(parametros.has('/cartones/?nombre'))
        console.log(parametros)
        console.log(loteCartones)
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
    //5--GET sacar_numero que saca un número del bingo y marca los cartones que lo tienen.
    router.get('/sacar_numero', (req,res) => {
        var numRand=random(1,90)
        console.log("Random", numRand)

        var cartoncorriente
        for (let carton = 0; carton < loteCartones.length; carton++) {
            cartoncorriente=loteCartones[carton]
            console.log("carton", carton)
            for (let casillero = 0; casillero < 27; casillero++) {
                console.log("casillero", casillero)
                if (numRand==cartoncorriente.infoCarton[casillero].valor) {
                    console.log("salio nro00000000000000000000000000000000000000000")
                    cartoncorriente.infoCarton[casillero].valor="x"
                }
                console.log(cartoncorriente.infoCarton[casillero].valor)
            }
        }
        var infoString = JSON.stringify(loteCartones);
            var infoJson = JSON.parse(infoString);
            res.send(infoJson);
    })
module.exports = router;