const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

// const port = parseInt(process.env.PORT, 10) || 8080
const port = 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const testRoutes = require('./routes/test')

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.use('/api', testRoutes)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Server running`)
  })
})
