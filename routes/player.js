const express = require('express')
const {createPLayer, getAllPlayers, getOnePlayer, updatePlayer, removePlayer} = require('../controllers/player')


router.route('/:id').get(getOnePlayer).patch(updatePlayer).delete(removePlayer)
router.route('/').get(getAllPlayers).post(createPLayer)

module.exports = router
