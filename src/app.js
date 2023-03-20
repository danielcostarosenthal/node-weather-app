require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const weatherAPI = require('./apis/weatherAPI')
const routes = require('./routes/routes')

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

// RestFull API
app.use(weatherAPI)

// Routes
app.use('/', routes)
app.use('/about', routes)
app.use('/help', routes)
app.use('/products', routes)
app.use('/help/*', routes)
app.use('/*', routes)

// Start Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`)
})
