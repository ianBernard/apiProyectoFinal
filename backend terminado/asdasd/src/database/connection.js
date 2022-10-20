import sql from 'mssql'
const dbSettings = {
    user: 'ian1',
    password: 'rossi',
    server: 'localhost',
    database: 'database',
    stream: false,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }    
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error)
    {
        console.log(error)
    }
}

export {sql}