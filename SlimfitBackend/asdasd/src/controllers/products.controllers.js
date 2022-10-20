import { getConnection, sql, queries } from "../database/"

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllUsuarios)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
}
export const createUsuarios = async (req, res) => {
    const { usuario, contraseña } = req.body
    if (usuario == null || contraseña == null) {
        return res.status(400).json(msg = 'Por favor llene los espacios')
    }
    try {
        const pool = await getConnection()
        await pool.request().input("usuario", sql.Text, usuario).input("contraseña", sql.Text, contraseña).query(queries.createUsuarios)
        res.json({ usuario, contraseña })
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }

}

export const getUsuariosById = async (req, res) => {
    const { idUsuario } = req.params
    const pool = await getConnection()
    const result = await pool.request().input('idUsuario', idUsuario).query(queries.getUsuariosById)
    console.log(result)
    res.send(idUsuario)
}
export const deleteUsuarioById = async (req, res) => {
    const { idUsuario } = req.params
    const pool = await getConnection()
    const result = await pool.request().input('idUsuario', idUsuario).query(queries.deleteUsuario)
    console.log(result)
    res.send(idUsuario)
}
/////////////////////////////////////////////////////////////////////////

export const getRecetas = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllRecetas)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
}

export const createRecetas = async (req, res) => {
    const { NombreReceta, descripcios } = req.body
    let { upvotes, downvotes, visitas } = req.body
    if (NombreReceta == null || descripcios == null) {
        return res.status(400).json(msg = 'Por favor llene los espacios')
    }
    if (upvotes == null || downvotes == null || visitas == null) {
        upvotes == 0
        downvotes == 0
        visitas == 0
    }
    try {
        const pool = await getConnection()
        await pool
        await pool.request().input("NombreReceta", sql.Text, NombreReceta).input("upvotes", sql.Int, upvotes).input("downvotes", sql.Int, downvotes).input("visitas", sql.Int, visitas).input("descripcios", sql.Text, descripcios).query(queries.createRecetas)
        res.json({ NombreReceta, upvotes, downvotes, visitas, descripcios })
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }

}

export const getRecetasById = async (req, res) => {
    const { idReceta } = req.params
    const pool = await getConnection()
    const result2 = await pool.request().input('idReceta', idReceta).query(queries.getRecetasById)
    console.log(result2)
    res.send(idReceta)
}

export const deleteReceta = async (req, res) => {
    const { idReceta } = req.params
    const pool = await getConnection()
    const result2 = await pool.request().input('idReceta', idReceta).query(queries.deleteReceta)
    console.log(result2)
    res.send(result2)
}

/////////////////////////////////////////////////////////////////////////

export const getRutina = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllRutinas)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }
}

export const createRutinas = async (req, res) => {
    const { Nombre, Descripcion } = req.body
    let { Downvotes, Upvotes,  Visitas } = req.body
    if (NombreReceta == null || descripcios == null) {
        return res.status(400).json(msg = 'Por favor llene los espacios')
    }
    if ( Downvotes == null || Upvotes == null || Visitas == null) {
        Downvotes == 0
        Upvotes == 0
        Visitas == 0
    }
    try {
        const pool = await getConnection()
        await pool
        await pool.request().input("Nombre", sql.Text, Nombre).input("Descripcion", sql.Int, Descripcion).input("Downvotes", sql.Int, Downvotes).input("Upvotes", sql.Int, Upvotes).input("Visitas", sql.Text, Visitas).query(queries.createRecetas)
        res.json({ Nombre, Descripcion, Downvotes, Upvotes, Visitas })
    } catch (error) {
        res.status(500)
        res.send(error.msg)
    }

}

export const getRutinasById = async (req, res) => {
    const { idReceta } = req.params
    const pool = await getConnection()
    const result2 = await pool.request().input('idReceta', idRutina).query(queries.getRutinasById)
    console.log(result2)
    res.send(idReceta)
}

export const deleteRutinas = async (req, res) => {
    const { idReceta } = req.params
    const pool = await getConnection()
    const result2 = await pool.request().input('idRutina', idRutina).query(queries.deleteRutinas)
    console.log(result2)
    res.send(result2)
}