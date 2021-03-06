const express = require('express')
const app = express()


// this sets hbs as a templating engine for this express app
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
	const todos = ['learn node', 'learn react', 'watch devs']
	const user = 'jonas'
	const someHTML = '<h1>This is HTML coming from the server</h1>	'
	// before: res.sendFile()
	res.render('home', {
		username: undefined,
		greeting: 'Hi',
		someHTML: someHTML,
		todoList: ['learn node', 'learn react', 'watch devs'],
		movie: {
			title: 'Indiana Jones',
			director: 'Steven Spielberg'
		}
	})
})

const movies = require('./movies')
app.get('/movies', function (req, res) {
	res.render('movies/index', { movieList: movies })
})

app.listen(3000, function () {
	console.log('server listening')
})