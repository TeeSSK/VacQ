const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')

//Route files
const hospitals = require('./routes/hospitals')
const auth = require('./routes/auth')
const appointments = require('./routes/appointments')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

const app = express()
app.use(cors())

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())
app.use(mongoSanitize())
app.use(helmet())

app.use('/api/v1/hospitals', hospitals)
app.use('/api/v1/auth', auth)
app.use('/api/v1/appointments', appointments)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log('Server running in', process.env.NODE_ENV, 'mode on port', PORT)
)

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  // Close server & exit process
  server.close(() => process.exit(1))
})
