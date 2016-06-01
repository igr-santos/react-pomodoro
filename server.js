// server.js
var express = require('express')
var path = require('path')
var compression = require('compression')


var app = express()
// must be first!
app.use(compression())

// add path.join here
app.use(express.static(path.join(__dirname, 'examples')))

// ...
app.get('*', function (req, res) {
  // and drop 'public' in the middle of here
  res.sendFile(path.join(__dirname, 'examples', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
