const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const URL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${latitude},${longitude}`

	request({ url: URL, json: true }, (err, { body }) => {
		if (err) {
			callback('Unable to connect.')
		} else if (body.error) {
			callback('Unable to find location.')
		} else {
			callback(undefined, {
				data: body.current,
				feelsLike: body.current.feelslike,
				description: body.current.weather_descriptions[0],
				humidity: body.current.humidity,
				pressure: body.current.pressure,
				temperature: body.current.temperature,
				temperatureLow: body.current.temperature,
				temperatureHigh: body.current.temperature,
				weatherIcon: body.current.weather_icons[0],
				forecast: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}ºC degrees out${
					body.current.temperature > body.current.feelslike ? `, but it feels like ${body.current.feelslike}ºC degrees out` : ' and it feels just as much'
				}. The humidity is ${body.current.humidity}%.`
			})
		}
	})
}

module.exports = forecast
