const Appointment = require('../models/Appointment')

// @desc Get all appointments
// @route GET /api/v1/appointments
// @access Public
exports.getAppointments = async (req, res, next) => {
  let query

  // General users can see only their appointments!
  if (req.user.role !== 'admin') {
    query = Appointment.find({ user: req.user.id }).populate({
      path: 'hospital',
      select: 'name province tel',
    })
  } else {
    query = Appointment.find().populate({
      path: 'hospital',
      select: 'name province tel',
    })
  }

  try {
    const appointments = await query

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: 'Cannot find Appointment' })
  }
}

// @desc Get single appointment
// @route GET /api/v1/appointments/:id
// @access Public
exports.getAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate({
      path: 'hospital',
      select: 'name province tel',
    })

    if (!appointment) {
      return res
        .status(404)
        .json({
          success: false,
          message: `No appointment with the if of ${req.params.id}`,
        })
    }

    res.status(200).json({ success: true, data: appointment })
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: 'Cannot find Appointment' })
  }
}
