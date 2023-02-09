const router =require("express").Router();
const { getAllEvents, getEvent, addEvent, deleteEvent, UpdateEvent } = require("../controllers/eventControllers");


router.get('/', getAllEvents)

router.get('/:eventId',getEvent)

router.delete('/delete/:eventId',deleteEvent)
router.post('/add',addEvent);
router.patch('/update/:eventId',UpdateEvent)

module.exports =router
