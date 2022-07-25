const express = require('express')
const {createClub, getAllClubs, getOneClub, updateClub, removeClub} = require('../controllers/club')


router.route('/:id').get(getOneClub).patch(updateClub).delete(removeClub)
router.route('/').get(getAllClubs).post(createClub)

module.exports = router
