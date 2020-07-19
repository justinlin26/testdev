var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { 
    rejectUnauthorized: false
  }
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});


app.get('/search', async(req,res)=>{
    console.log(req.query);
  var search = req.query.q;
    console.log(search+'hello!!!!');
    
  try {
    const client = await pool.connect();
     const result = await client.query("SELECT * FROM users WHERE companyname='"+search+"';");
      
    const results = { 'results': (result) ? result.rows : null};
    
    client.release();
    res.render('db',results);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});
app.get('/create',function(req,res){
  res.render('newprofile');
});
app.post('/create',async(req,res)=>{
 
  console.log(req.body);
  try {
    const client = await pool.connect();
    const result = await client.query("INSERT INTO users VALUES('"+req.body.lname+"','"+req.body.fname+"','"+req.body.cname+"','"+req.body.cd+"');");
    
    const results = { 'results': (result) ? result.rows : null};
    
    console.log("results sumbitted!!!!!!!!!!!!!!!"+results);
    client.release();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
  
});
app.get("/aboutus", function(req,res){
    //ejs render automatically looks in the views folder
    res.render('aboutus');
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});



