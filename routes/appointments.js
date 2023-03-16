const express = require('express')

const {
  getAppointments,
  getAppointment,
} = require('../controllers/appointments')

const router = express.Router({ mergeParams: true })

const { protect } = require('../middleware/auth')

router.route('/').get(protect, getAppointments)
router.route('/:id').get(protect, getAppointment)

module.exports = router
