const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'lsamayoa1', //lsamayoa on local server
    password: 'iloveR2D2',
    //password: '123456789', //Local Server
    database: 'umg_test'
});

mysqlConnection.connect(function (err) {
    if (err) 
        {
            console.log(err);
            return;
        }
    else {
        console.log('Db Connection established successfully')
    }
});

module.exports = mysqlConnection;
