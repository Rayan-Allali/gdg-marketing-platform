const router =require("express").Router();
const { getAllGuests, getGuest, AddGuest, deleteGuest, updateGuest } = require("../controllers/guestControllers");


router.get('/', getAllGuests)

router.get('/:companieId',getGuest)

router.delete('/delete/:companieId',deleteGuest)
router.post('/add',AddGuest);
router.patch('/update/:companieId',updateGuest )

module.exports =router