const express = require('express');
const { append } = require('express/lib/response');
const cors = require('cors');
const app = express()
const sqlite3 = require('sqlite3').verbose();
const port = 8383


app.listen(port, () => console.log(`Server has started on port: ${port}`))


// open the database
var db = new sqlite3.Database('sample.db');



app.get('/:blok', (req, res) => {

    var blok = req.param('blok');
    let sql = `SELECT * FROM blok${blok}`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.json(rows)
      // rows.forEach((row) => {
      //   data.push(row)
      // });
    });

    
    //res.json(data)
    //data.length = 0


  
  
  
})