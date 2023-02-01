const express = require('express')
const router = express.Router()

const app = express()

router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: { id: 1 } })
})

router.get('/api/v1/hospitals', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all hospitals' })
})

router.get('/api/v1/hospitals/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show hospitals ${res.params.id}` })
})

router.post('/api/v1/hospitals', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new hospitals' })
})

router.put('/api/v1/hospitals:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update hospital ${req.params.id}` })
})

router.delete('/api/v1/hospitals/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete hospital ${res.params.id}` })
})

module.exports = router
