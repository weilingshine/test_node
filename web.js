import http from 'http'
const server = http.createServer((request, response) => {
  response.writeHead(200)
  response.write('hissss')
  response.end()
})
server.listen(8080, () => {
  console.log('server started  ')
})