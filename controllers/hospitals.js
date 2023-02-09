const Hospital = require('../models/Hospital')

// @desc Get all hospitals
// @route GET /api/v1/hospitals
// @access Public
exports.getHospitals = async (req, res, next) => {
  try {
    const hospitals = await Hospital.find()
    res.status(200).json({
      success: true,
      msg: 'Show all hospitals',
      count: hospitals.length,
      data: hospitals,
    })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc Get single hospital
// @route GET /api/v1/hospitals/:id
// @access Public
exports.getHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id)

    if (!hospital) {
      return res.status(400).json({ success: false })
    }

    res
      .status(200)
      .json({
        success: true,
        msg: `Show hospitals ${req.params.id}`,
        data: hospital,
      })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc create new hospital
// @route POST /api/v1/hospitals
// @access Private
exports.createHospital = async (req, res, next) => {
  const hospital = await Hospital.create(req.body)
  res
    .status(201)
    .json({ success: true, msg: 'Create new hospitals', data: hospital })
}

// @desc Update hospital
// @route PUT /api/v1/hospitals/:id
// @access Private
exports.updateHospital = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update hospital ${req.params.id}` })
}

// @desc delete hospital
// @route DELETE /api/v1/hospitals/:id
// @access Private
exports.deleteHospital = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete hospital ${req.params.id}` })
}
