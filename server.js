const express = require('express')
const path = require('path')
const cors=require("cors")
require('./db/db')

const app = express()


console.log(process.env.jwtSecret);

// Init middleware
app.use(cors())
app.use(express.json({ extended: false }))

// Load Routes
app.use(require('./routes/api/userRoute'))
app.use(require('./routes/api/authRoute'))
app.use(require('./routes/api/profileRoute'))
app.use(require('./routes/api/postRoute'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
