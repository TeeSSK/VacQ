const mysql = require('mysql')

var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'vaccenter2',
})

module.exports = connection
