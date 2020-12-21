var mysql = require('mysql');

var connMysql =  function(){
    return mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : 'senhamysql',
        database: 'oficina_artcar'
    });
}

module.exports = function(){
    return connMysql;
}