import cnx from './cnx'
import sql from 'mssql'

async function getUsuarios()
{
    try{
        let pool = await sql.connect(cnx)
        let salida = await pool.request().query("Select * from Usuarios")
        console.log(salida.recordset)
    } catch(err){
        console.log(err)
    }
}

async function postUsuarios()
{
    try{
        let pool = await sql.connect(cnx)
        let postUsuarios = await pool.request().execute("Select * from Usuarios")

    } catch(err){
        console.log(err)
    }
}


module.exports = {
    getUsuarios: getUsuarios
}