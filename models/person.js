require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Yhdistetty MongoDB:hen.')
    })
    .catch((error) => {
        console.log('Virhe yhdistettäessä MongoDB:hen: ', error.message)
    })

mongoose.set('useFindAndModify', false)

const personSchema = new mongoose.Schema({ //luodaan skeema
    name: String,
    number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)