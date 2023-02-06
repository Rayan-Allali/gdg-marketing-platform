const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllGuests(req, res) {
    const guests = await prisma.guest.findMany();
    res.status(200).json({message: 'Success', data: guests});
}

async function getGuestById(req, res) {
    const id = req.params.id
    const guest = await prisma.guest.findUnique({
        where: {
            guestId: id
        }
    });

    if (guest === null) {
        res.code(404).json({message: 'Not Found'});
        return;
    }
    res.code(200).json({message: 'Success', data: guest})
    
}

async function postGuest(req, res) {
    function validateGuest(guest) {
       return guest.firstName && guest.lastName && guest.country && guest.age;
    }
    
    const guest = req.body;
    if(!validateGuest(guest)) {
        res.code(400).json({message: 'Bad Request', data: guest})
        return
    }
    
    
}



async function deleteGuestById(req, res) {
    const id  = req.params.id;
    
    const guest = await prisma.guest.findUnique({
        where: {
            guestId: id
        }
    })
    if(guest === null) {
        res.code(404).json({message: 'Not Found'})
        return
    } else {
        prisma.guest.delete(guest);
        res.code(200).json({message: 'Success', data: id})
    }
}

async function updateGuest(req, res) {
    const id = req.params.id;

}

module.exports = { getAllGuests, getGuestById, postGuest, deleteGuestById, updateGuest };