const express = require('express')
const {createManager, getAllManagers, getOneManager, updateManager, removeManager} = require('../controllers/manager')


router.route('/:id').get(getOneManager).patch(updateManager).delete(removeManager)
router.route('/').get(getAllManagers).post(createManager)

module.exports = router
