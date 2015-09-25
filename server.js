// Require modules
var express = require('express')
var soda = require('soda-js');
var bodyParser = require('body-parser')
var app = express()

// Configure
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
var sodaOpts = {
        "username": "testuser@gmail.com",
        "password" : "OpenData",
        "apiToken" : "D8Atrg62F2j017ZTdkMpuZ9vY"
}
var consumer = new soda.Consumer('explore.data.gov', sodaOpts)
var PORT = 3333

// Route
app.get('/', function handleHomepage(req, res){
    res.send("index.html")
})

app.get('/api/:s', function handleSearch(req, res){
    var lastName = req.query.lastName
    consumer.query()
      .withDataset('644b-gaut')
      .limit(5)
      .where({ namelast: lastName })
      .order('namelast')
      .getRows()
        .on('success', function(rows) { res.json(rows) })
        .on('error', function(error) { res.json('error') })



})

// Launch server
console.log("Server listing on ", PORT)
app.listen(PORT)
