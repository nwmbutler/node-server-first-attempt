http = require('http')
fs = require('fs')
port = 3000

server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' })
  fs.readFile('index.html', function(error, data) {
      if (error) {
          res.writeHead(404)
          res.write('Error: File Not Found')
      } else {
          res.write(data)
      }
      res.end()
  })
})

server.listen(port, function(error) {
  if (error) {
      console.log('something went wrong', error)
  } else {
      console.log('server is listening on port ' + port)
  }
})