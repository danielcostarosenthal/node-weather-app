const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Daniel Costa'
	})
})

router.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Daniel Costa'
	})
})

router.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: 'Daniel Costa',
		message: 'This is some helpful information.'
	})
})

router.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'You must provide a search term.'
		})
	}

	res.send({
		products: []
	})
})

router.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404 Error',
		name: 'Daniel Costa',
		message: 'Help article not found.'
	})
})

router.get('*', (req, res) => {
	res.render('404', {
		title: '404 Error',
		name: 'Daniel Costa',
		message: 'Page not found.'
	})
})

module.exports = router
