const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//controller middleware
app.use('/kitties', require('./controllers/kitties'))

app.listen(8001, () => {
  console.log('kittycollector 8000')
})