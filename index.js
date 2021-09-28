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

app.get('/', (req, res) => {s
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})