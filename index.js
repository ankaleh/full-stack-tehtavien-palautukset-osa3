const express = require('express')
const app = express()
app.use(express.json())

const generatedId = () => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    :0
    return maxId+1
}

let persons = [
    { 
        name: 'Arto Hellas', 
        number: '040-123456',
        id: 1
    },

    { 
        name: 'Ada Lovelace', 
        number: '39-44-5323523',
        id: 2
    },

    { 
        name: 'Dan Abramov', 
        number: '12-43-234345',
        id: 3
    },

    { 
        name: 'Mary Poppendieck', 
        number: '39-23-6423122',
        id: 4
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const amount = persons.length
    console.log(amount)
    const date = new Date()
    console.log(date)
    res.send(`<p>Puhelinluettelossa on ${amount} yhteystietoa.</p> <p>${date}</>`)
    
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    const added = persons.filter(p => p.name === body.name)
    if (!body.number) {
        return res.status(400).json({
            error: 'Numero puuttuu.'
        })
    }
    if (!body.name) {
        return res.status(400).json({
            error: 'Nimi puuttuu.'
        })
    }
    if (added.length === 1) {
        return res.status(400).json({
            error: 'Yhteystieto on jo puhelinluettelossa.'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generatedId()
    }

    persons = persons.concat(person)
    res.json(person)
})

const port = 3001

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
