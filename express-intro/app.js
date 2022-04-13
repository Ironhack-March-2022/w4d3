const express = require('express')
const app = express()
const port = 3000

// this registers the public folder so that it get's sent 
// to the client with the response
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	console.log('home route')
	// res.send('<h1>This is the Home Page 👋 🐵</h1>')
	// this gives us the full path of the directory
	// console.log(__dirname)
	res.sendFile(__dirname + '/views/home.html')
})

app.get('/dog', function (req, res) {
	console.log('this is the about route')
	res.sendFile(__dirname + '/views/dog.html')
})

app.get('/cat', function (req, res) {
	res.sendFile(__dirname + '/views/cat.html')
})

app.listen(port, () => {
	console.log(`Listening to port ${port}`)
})