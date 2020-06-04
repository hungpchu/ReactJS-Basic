const express = require('express');
// kết nối với thư viện mysql.
const mysql = require('mysql');
const app = express();

// kết nối tới MySQL và gán với biến connection.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hungpchu',
    database: 'todo_db'
});

// tiến hành thực hiện một kết nối.
connection.connect(function(err){
    (err) ? console.log("Database not connect:  " + err) : console.log("Connection: " + connection);
})

app.get('/api/news', (req,res) => {
    var sql = "SELECT * FROM ToDo";
    connection.query(sql, function(err, results){
        if(err) throw err;
        // dữ liệu sẽ được gửi dưới dạng JSON.
        var re = res.json({todo: results});
    })
})

app.listen(4000, ()=> console.log('App listen on port 4000'));