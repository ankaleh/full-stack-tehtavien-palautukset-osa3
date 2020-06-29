const mongoose = require('mongoose')

const userName = process.argv[2]
const password = process.argv[3] //suoritus komennolla node mongo.js tietokantakayttaja tietokantakayttajan_salasana
const url = `mongodb+srv://${userName}:${password}@cluster0-tyays.mongodb.net/puhelinnumerot?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const name = process.argv[4]
const number = process.argv[5]

const personSchema = new mongoose.Schema({ //luodaan skeema
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema) //määritetään model Person --> Mongoose luo taulun nimeltä People

if (process.argv.length===6) {
  const person = new Person({
    name: name,
    number: number
  })
  person.save().then(() => {
    console.log('Numero tallennettu tietokantatauluun People.')
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(result => {
    console.log(process.argv.length)
    console.log('Puhelinluettelo: ')

    result.forEach(person => {
      console.log(person)

    })
    mongoose.connection.close()
  })

}




