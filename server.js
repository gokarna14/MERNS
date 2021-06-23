const express = require('express')
var app = express()

app.use(express.json())


app.get('/', function(req, res) {
    res.send("This is from n..ode js")
})
 
app.get('/api/hw/', (req, res) => {
    res.send('This is hello .. world from NodeJS, made by PRABAS GOKARNA ADHIKARI')
})

app.get('/api/getNames', (req, res) => {
    var names = ['Prabas', 'Gokarna', 'Adhikar'];
    res.send(names);
})


app.post('/api/validateUserName', (req, res)=>{
    var username = req.body.username
    res.send("The received value of username is: " + username)
})


app.listen(4000, () => {
    console.log("Server is Started")
})