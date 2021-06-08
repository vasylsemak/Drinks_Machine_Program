const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const PORT = 3000

// logim middleware
app.use(morgan('dev'))

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.listen(PORT, () => {
  console.log(`

  Server is listening on port: http://localhost:${PORT}/  !

  `)
})
