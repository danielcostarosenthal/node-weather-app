const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: process.env.MY_NAME,
		weatherIcon: 'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png'
	})
})

router.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: process.env.MY_NAME
	})
})

router.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: process.env.MY_NAME,
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
		name: process.env.MY_NAME,
		message: 'Help article not found.'
	})
})

router.get('*', (req, res) => {
	res.render('404', {
		title: '404 Error',
		name: process.env.MY_NAME,
		message: 'Page not found.'
	})
})

module.exports = router
