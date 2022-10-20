import {Router} from 'express'
import { getUsuarios, createUsuarios, getUsuariosById, deleteUsuarioById, getRecetas, createRecetas, getRecetasById, deleteRecetasById, getRutinas, createRutinas, getRutinasById,deleteRutinasById} from '../controllers/products.controllers'
const router = Router()
router.get('/usuarios', getUsuarios)
router.post('/usuarios',createUsuarios)
router.get('/usuarios/:idUsuario', getUsuariosById)
router.delete('/usuarios/:idUsuario', deleteUsuarioById)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/recetas', getRecetas)
router.post('/recetas',createRecetas)
router.get('/recetas/:idRecetas', getRecetasById)
router.delete('/recetas/:idRecetas', deleteRecetasById)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/rutinas',getRutinas)
router.post('/rutinas',createRutinas)
router.get('/rutinas/:idRutina', getRutinasById)
router.delete('/rutinas/:idRutina', deleteRutinasById)

export default router