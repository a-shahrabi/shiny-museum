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

// ===== NEW NOTES ROUTES =====

// GET all notes
app.get('/api/notes', (req, res) => {
    res.json({notes: notes, count: notes.length})
})

// POST a new note
app.post('/api/notes', (req, res) => {
    const { text } = req.body
    
    if (!text) {
        return res.status(400).json({error: 'Note text is required'})
    }
    
    const newNote = {
        id: noteIdCounter++,
        text: text,
        createdAt: new Date()
    }
    
    notes.push(newNote)
    res.status(201).json({mssg: 'Note created', note: newNote})
})

// DELETE a note by id
app.delete('/api/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id)
    const initialLength = notes.length
    
    notes = notes.filter(note => note.id !== noteId)
    
    if (notes.length === initialLength) {
        return res.status(404).json({error: 'Note not found'})
    }
    
    res.json({mssg: 'Note deleted', id: noteId})
})

