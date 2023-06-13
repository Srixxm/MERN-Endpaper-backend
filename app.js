require('dotenv').config()
const express = require('express')
const app= express()
const PORT = 3500
const news = require('./routes/newsRoute')
const postnews = require('./routes/postRoute')
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect(process.env.MY_URL)
const db = mongoose.connection
db.on('error', errormessage => console.log(errormessage))
db.once('open', ()=> console.log('connection established'))



app.get(('/'), (request, response) => {
    response.send('Welcome to Libert Times')
})

app.use('/api/v1/news', news)
app.use('/api/v1/postnews', postnews)
app.listen(PORT, console.log(`server is running in http://localhost:${PORT}`))