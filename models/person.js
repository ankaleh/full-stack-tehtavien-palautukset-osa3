require('dotenv').config()
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Yhdistetty MongoDB:hen.')
  })
  .catch((error) => {
    console.log('Virhe yhdistettäessä MongoDB:hen: ', error.message)
  })

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const personSchema = new mongoose.Schema({ //luodaan skeema
  name:  { type: String, required: true, minlength: 3, unique: true },
  number: { type: String, minlength: 8 }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)