import {Router} from 'express'
import {getUsuarios, createUsuarios, getUsuariosById, deleteUsuarioById, 
        getRecetas, createRecetas, getRecetasById, deleteReceta, 
        getRutina, createRutinas, getRutinasById, deleteRutinas } from '../controllers/products.controllers'
const router = Router()
router.get('/usuarios', getUsuarios)
router.post('/usuarios',createUsuarios)
router.get('/usuarios/:idUsuario', getUsuariosById)
router.delete('/usuarios/:idUsuario', deleteUsuarioById)
/////////////////////////////////////////////////////////////////////////
router.get('/recetas', getRecetas)
router.post('/recetas',createRecetas)
router.get('/recetas/:idReceta', getRecetasById)
router.delete('/recetas/:idReceta', deleteReceta)
/////////////////////////////////////////////////////////////////////////
router.get('/rutinas', getRutina)
router.post('/recetas',createRutinas)
router.get('/recetas/:idReceta', getRutinasById)
router.delete('/recetas/:idReceta', deleteRutinas)

export default router