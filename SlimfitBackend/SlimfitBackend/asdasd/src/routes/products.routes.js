import {Router} from 'express'
import { getUsuarios, getRecetas, createRecetas, createUsuarios, getUsuariosById, getRecetasById, deleteReceta, deleteUsuarioById} from '../controllers/products.controllers'
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

export default router