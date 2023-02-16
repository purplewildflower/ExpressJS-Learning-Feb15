const express = require('express')
const app = express() //create an application

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here')
    //res.status(500).send('Hi')
    //res.send('Hi')
    //res.sendStatus(500) //makes internal service area
    //res.status(500).json({message: "Error"}) //use to send json to client
    //res.download('server.js') //pass the user a file
    res.render('index', {text: "World"})//render an html file
})

app.listen(3000) //listen on port 3000
