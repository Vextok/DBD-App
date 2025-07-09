var mysql = require('mysql2');
var connection = mysql.createConnection({
    
  });

  var express = require('express');
  var app = express();
  app.set("view engine","ejs"); //Method that allows us to set the view engine to EJS template. 
  var bodyParser  = require("body-parser");
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + "/public"));

/*Reading the Killer_Names file along with their keywords and inserting into the MySQL table killers.
const fs = require('fs');
fs.readFile("./Killer_Names.txt", 'utf8', (err,data) =>{

    if(err){
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    const Killers = {};

    lines.forEach((line,index) => {

        const specificLine = line;
        //console.log(data);
        //console.log('Line: ', specificLine);
    
        const parts = specificLine.split(',');
        const name = parts[0];
        const keywords = parts.slice(1).map(keyword => keyword.trim()); // Trim each keyword
    
        
        //console.log('Killer Name: ', name);
        //console.log('Keyword', index + 1, keyword);
            
        const query = 'INSERT INTO killers (killer_name, killer_keyword, killer_keyword2) VALUES (?,?,?)';
        connection.query(query, [name, keywords[0], keywords[1]], (err,result) =>{

            if(err) throw err;
            console.log(result);

        });


      


        //Killers[name] = keywords;

        //console.log('______');

    });

    /*
    const specificLine = lines[10];
    //console.log(data);
    console.log('Line: ', specificLine);

    const parts = specificLine.split(',');
    const name = parts[0];
    const keywords = parts.slice(1).map(keyword => keyword.trim()); // Trim each keyword

    console.log('Killer Name: ', name);
    keywords.forEach((keyword, index) => {
        console.log('Keyword', index + 1, keyword);
    });

    connection.end(); //Connection.end() needs to be here otherwise the connection ends before it starts
});



const fs = require('fs');
fs.readFile("./Killer_Perks.txt", 'utf8', (err,data) =>{

    if(err){
        console.error(err);
        return;
    }
    const lines = data.split('\n');

    lines.forEach((line,index) => {

        const perk_name = line;
    
            
        const query = 'INSERT INTO killer_perks (perk_name) VALUES (?)';
        connection.query(query, [perk_name], (err,result) =>{

            if(err) throw err;
            console.log(result);

        });


      

    });


    connection.end(); //Connection.end() needs to be here otherwise the connection ends before it starts
});*/

app.get("/", function(req,res){
    //Find count of users in Database, and respond with that count.
    res.render("home.ejs");
  
    });
    //res.send("We have " + count + "users in our database.");


app.get("/randomgenkiller", function(req,res){
    console.log("Selected filters:", req.query.attribute);

    let filters = req.query.attribute;
    let queryParams = [];

    
    let query = 'SELECT * FROM killers ORDER BY RAND() LIMIT 1';
    const perksQuery = 'SELECT * FROM killer_perks ORDER BY RAND() LIMIT 4';


    if(filters && filters.length > 0){
         query = 'SELECT * FROM killers' 
        if(!Array.isArray(filters)){
            filters = [filters];
        }
        const attributes = filters.map(()=>'(killer_keyword = ? OR killer_keyword2 = ?)');
        query += ' WHERE ' + attributes.join(' OR ');

        filters.forEach(attr => { queryParams.push(attr,attr);
            
        });
        query += ' ORDER BY RAND() LIMIT 1'
    }

    connection.query(query, queryParams, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error retrieving killer");
            return;
        }
        

        const randomKiller = results[0]; // only one result since LIMIT 1
    //res.render("randomkiller.ejs", {data: randomKiller.killer_name});



connection.query(perksQuery, (err,perkResults) =>{

    if(err) throw err;
    res.render("randomkiller.ejs", {data: randomKiller.killer_name, perks: perkResults,  killer_image: randomKiller.image_url, filters: filters

    });

});

});

});

  
app.listen(8080,function(){
    console.log('App is listening on port 8080!');
});

//connection.end();
