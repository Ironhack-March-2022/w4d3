// we use the node core module http
const http = require('http')

const server = http.createServer(function (request, response) {
	console.log(request.url)
	console.log(request.method)
	if (request.url === '/') {
		response.end('<h1>this is the home page</h1>')
	}
	if (request.url === '/about') {
		response.end('<h1>this is the about page</h1>')
	} else {
		response.end('<h1>404 - document not found</h1>')
	}

})

// start the server
server.listen(3000, function () {
	console.log('Server listening on port 3000')
})
