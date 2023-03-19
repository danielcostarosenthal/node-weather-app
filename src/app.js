const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Init Express
const app = express()

// Paths
const viewsDirPath = path.join(__dirname, '../templates/views')
const partialsDirPath = path.join(__dirname, '../templates/partials')
const publicDirPath = path.join(__dirname, '../public')

// View Engine for Handlebars
app.set('view engine', 'hbs')
app.set('views', viewsDirPath)
hbs.registerPartials(partialsDirPath)

// Static Folder
app.use(express.static(publicDirPath))

// Routes
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Daniel Costa i Mastacanean'
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Daniel Costa i Mastacanean'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: 'Daniel Costa i Mastacanean',
		message: 'This is some helpful information.'
	})
})

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It is sunny',
		location: 'Barcelona',
		temperature: 17
	})
})

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404 Error',
		name: 'Daniel Costa i Mastacanean',
		message: 'Help article not found.'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404 Error',
		name: 'Daniel Costa i Mastacanean',
		message: 'Page not found.'
	})
})

// Start Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`)
})
