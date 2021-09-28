const { dataArr } = require('./data.js')
// imports express library
const express = require('express')
// calls express and saves return to app variable. 
const app = express()
// imports cors to enable remote servers access to our backend.
const cors = require('cors')
// imports and configures dotenv.
require('dotenv').config()
// first attempts to retrieve a port hidden in .env file, if none exist or not accessible, return default port #3000
const port = process.env.PORT || 3000

// Allows other servers to hit our endpoints. 
app.use(cors())

// Defines /teas endpoint, if hit it will return the entire dataArr.
app.get('/teas', (req, res) => {
    res.json(dataArr)
})

// Defines /tea/:tea endpoint, if hit will find correct tea and return the dataObj.
app.get('/teas/:tea', (req, res) => {
    const matchingTea = dataArr.find(dataObj => dataObj.tea === req.params.tea)
    res.json(matchingTea)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})