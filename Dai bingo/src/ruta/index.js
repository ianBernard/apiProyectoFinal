const{Router}=require('express');
const router = Router();
//Acta lo que hice fue tratar de mandar cosas a la API a ver si le llegaba la informacion adecuadamente
router.get('/test', (req,res) => {
    const data= {
        "name": "ian",
        "apellido":"Bernard"
    }
    res.json(data)
})

module.exports = router;
