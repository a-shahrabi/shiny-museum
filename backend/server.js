require('dotenv').config()

//express app package
const express = require ('express')

//starting express app
const app = express()

//route handler (respond to get request)
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})

})

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT)
})

