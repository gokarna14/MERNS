const express = require('express')

var app = express()

app.get('/', function(req, res) {
    res.send("This is from node js")
})
 
app.get('/api/hw/', (req, res) => {
    res.send('This is hello world from NodeJS')
})

app.get('/api/getNames', (req, res) => {
    var names = ['Prabas', 'Gokarna', 'Adhikar'];
    res.send(names);
})


app.listen(4000, () => {
    console.log("Server is Started")
})