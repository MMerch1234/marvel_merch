const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    database:'node_shopping',
    user:'root',
    password:'root',
    port:'3306'
});

db.connect(err=>{
    if(err)
    {
        console.log('Error occured' +err);
    }
    else 
    {
        console.log('Connected Successful');
    }
});
module.exports= db;