import config from '../database/connection.js'
import sql from 'mssql'

class Usuariosget{ 
     getById = (id)=>{
        let returnEntity =null
        try {
            let pool =  sql.connect(config);
            let result =  pool.request()
            .input('pId', sql.Int,sql)
            .request().query("SELECT * FROM Usuarios") ;
            returnEntity = result.recordsets[0][0]
        } catch (error)
        {
            console.log(error)
        }
        return returnEntity
    }
}
export default Usuariosget
