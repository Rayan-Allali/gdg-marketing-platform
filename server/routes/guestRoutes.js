const express = require("express")
const router = express.Router()
const guestControllers = require("./../controllers/guestControllers")



router.get('/guest/get/all', guestControllers.getAllGuests)
router.get('/guest/get/:id', guestControllers.getGuestById)
router.post('/guest/post', guestControllers.postGuest)
router.delete('/guest/delete/:id', guestControllers.deleteGuestById)
router.put('/guest/update/:id', guestControllers.updateGuest)

module.exports = router;