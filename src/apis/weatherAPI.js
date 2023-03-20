const express = require('express')

// Init Express
const app = express()

// Controllers
const forecast = require('../controllers/forecastController')
const geocode = require('../controllers/geocodeController')

const weatherAPI = app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address.'
		})
	}

	geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return res.send({
				error: error
			})
		}

		forecast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return res.send({
					error: error
				})
			}

			res.send({
				address: req.query.address,
				forecast: forecastData,
				location: location
			})
		})
	})
})

module.exports = weatherAPI
