const express = require('express')

const MovieValidator = require('./validations/MovieValidator')
const MovieController = require('./controllers/MovieController')
const router = express.Router()

router.get('/movies/all', MovieController.get)
router.get('/movies/filter', MovieValidator.getByFilter, MovieController.getByFilter)
router.post('/movies', MovieValidator.create, MovieController.create)
router.delete('/movies/:id', MovieController.delete)

module.exports = router
