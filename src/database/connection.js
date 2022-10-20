import sql from 'mssql'

const dbSettings = {
    user: 'ian ',
    password: 'lucas',
    server:'A-PHZ2-CIDI-021',    
    database:'bbd',
    options: {
        trueServerCertificate: true,
        trustedConnection: true,
    },
}

export default dbSettings