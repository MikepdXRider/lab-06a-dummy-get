const { dataArr } = require('./data.js')
// imports express library
const express = require('express')
// calls express and saves return to app variable. 
const app = express()
// imports cors to enable remote servers access to our backend.
const cors = require('cors')
// imports and configures dotenv.
require('dotenv').config()

// Allows other servers to hit our endpoints. 
app.use(cors())

// Defines /teas endpoint, if hit it will return the entire dataArr.
app.get('/teas', (req, res) => {
    res.json(dataArr)
})

// Defines /tea/:tea endpoint, if hit will find correct tea and return the dataObj.
app.get('/teas/:id', (req, res) => {
    const matchingTea = dataArr.find(dataObj => dataObj.id === Number(req.params.id))
    res.json(matchingTea)
})

// Exports app
module.exports = {
    app
}