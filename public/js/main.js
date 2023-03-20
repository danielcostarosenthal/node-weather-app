console.log('Client side JS file is loaded')

const weatherForm = document.getElementById('weatherForm')
const weatherInput = document.getElementById('weatherInput')
const msgOne = document.getElementById('msg-1')
const msgTwo = document.getElementById('msg-2')

const getForecastData = async (url) => {
	const response = await fetch(url)
	const { error, forecast, location } = await response.json()

	if (error) {
		msgOne.textContent = error
	} else {
		msgOne.textContent = location
		msgTwo.textContent = forecast.description
		console.log(forecast)
	}
}

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault()

	msgOne.textContent = 'Loading...'
	msgTwo.textContent = ''

	const location = weatherInput.value
	getForecastData(`http://localhost:3000/weather?address=${location}`)
})
