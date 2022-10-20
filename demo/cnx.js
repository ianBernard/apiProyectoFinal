const cnx = {
    user: 'ian',
    password: 'bernard',
    server: 'DESKTOP-4U4SQR5/SQLEXPRESS',
    database: "BaseDeDatos",
    options: {
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false
    }
}

module.exports = cnx
export default cnx()