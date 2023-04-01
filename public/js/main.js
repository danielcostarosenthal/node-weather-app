const weatherForm = document.getElementById('weather-form')
const weatherInput = document.getElementById('weather-input')
const weatherMsg = document.getElementById('weather-msg')
const weatherCard = document.getElementById('weather-card')
const weatherIcon = document.getElementById('weather-icon')
const weatherTemp = document.getElementById('weather-temp')
const weatherForecast = document.getElementById('weather-forecast')
const weatherCity = document.getElementById('weather-city')

const getForecastData = async (url) => {
	const response = await fetch(url)
	const { error, forecast, location } = await response.json()

	if (error) {
		weatherMsg.style.display = 'block'
		weatherMsg.textContent = error
	} else {
		weatherMsg.style.display = 'none'
		weatherCard.style.display = 'block'
		weatherIcon.src = forecast.weatherIcon
		weatherTemp.textContent = `${forecast.temperature}ºC`
		weatherForecast.textContent = forecast.forecast
		weatherCity.textContent = location
		weatherInput.value = location.split(',')[0]
		weatherInput.blur()
		console.log(forecast)
	}
}

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault()

	weatherMsg.style.display = 'block'
	weatherMsg.textContent = 'Loading...'

	const location = weatherInput.value
	// getForecastData(`http://localhost:3000/weather?address=${location}`)
	getForecastData(`https://nice-plum-panther-tam.cyclic.app/weather?address=${location}`)
})
