const request = require('request')

const geocode = (address, callback) => {
	const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${process.env.MAP_BOX_API_TOKEN}`

	request({ url: URL, json: true }, (err, { body }) => {
		if (err) {
			callback('Unable to connect to location services.')
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search.')
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode
