require('dotenv').config()

// Express app package
const express = require('express')

// Starting express app
const app = express()

// Middleware for parsing JSON
app.use(express.json())

// Simple in-memory storage for notes
let notes = []
let noteIdCounter = 1

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Route handler (respond to get request)
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// About route
app.get('/about', (req, res) => {
    res.json({mssg: 'This is the about page'})
})

// API route with parameter
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id
    res.json({mssg: `User ID: ${userId}`})
})

// POST route example
app.post('/api/data', (req, res) => {
    const data = req.body
    res.json({mssg: 'Data received', data: data})
})

