// import app variable from 
const { app } = require('./server')

// first attempts to retrieve a port hidden in .env file, if none exist or not accessible, return default port #3000
const port = process.env.PORT || 3000

// On deploy, communicates to terminal where we can view our content.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})