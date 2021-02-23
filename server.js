const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express

app.request('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)