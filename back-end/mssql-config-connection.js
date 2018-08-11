const mssql = require('mssql');
require('msnodesqlv8');
module.exports = new mssql.ConnectionPool({
    server: 'HENRIQUE-PC\\SQLEXPRESS',
    database: 'DevDB',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
})
