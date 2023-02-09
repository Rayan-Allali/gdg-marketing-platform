const { PrismaClient } = require("@prisma/client");
const { connect } = require("../app");
const prisma = new PrismaClient();

async function getAllGuests(req, res) {
    const guests = await prisma.guest.findMany();
    res.status(200).json({ message: 'Success', data: guests });
}

async function getGuestById(req, res) {
    const id = req.params.id
    const guest = await prisma.guest.findUnique({
        where: {
            guestId: id
        }
    });

    if (guest === null) {
        res.code(404).json({ message: 'Not Found' });
        return;
    }
    res.code(200).json({ message: 'Success', data: guest })

}

async function postGuest(req, res) {
    function validateGuest(guest) {
        return guest.firstName && guest.lastName && guest.country && guest.age && guest.img;
    }

    function validateGuestContact(contactDetail) {
        return contactDetail.contactType && contactDetail.contactValue;
    }

    const guest = req.body;
    if (!validateGuest(guest)) {
        res.code(400).json({ message: 'Bad Request', data: guest })
        return
    }

    //validating the guest contact details
    const guestContactDetails = guest.contactGuest;
    for (let contact of guestContactDetails) {
        if (validateGuest(contact)) {
            continue;
        }

        res.code(400).json({ message: 'Bad Request', data: guest });
        return;
    }
    const contactIds = await guestContactDetails.map((contact) => {
        prisma.contactGuest.create({ data: contact }).contactId;
    })

    const createdGuest = await prisma.guest.create({
        data: {
            firstName: guest.firstName,
            lastName: guest.lastName,
            country: guest.country,
            img: guest.age,
            age: guest.age,
            contacts: {
                connect: contactId.map((id) => { id })
            }
        }
    })

    res.code(200).body({ message: 'Success', data: createdGuest })

}



async function deleteGuestById(req, res) {
    const id = req.params.id;

    const guest = await prisma.guest.findUnique({
        where: {
            guestId: id
        }
    })
    if (guest === null) {
        res.code(404).json({ message: 'Not Found' })
        return
    } else {
        prisma.guest.delete(guest);
        res.code(200).json({ message: 'Success', data: id })
    }
}

async function updateGuest(req, res) {
    function validateCredentials(credentials) {
        return credentials.firstName && credentials.lastName
        && credentials.age && credentials.country && credentials.img;
    }
    const id = req.params.id;
    const credentials = req.body;
    const guest = prisma.guest.findUnique({
        where: {
            guestId: id
        }
    });
    if(guest === null) {
        res.code(404).body({
            message: 'Not Found',
            data: credentials
        });
        return;
    }

    if(!validateCredentials(credentials)) {
        res.code(400).body({
            message: 'Bad Request',
            data: credentials
        })
    }

    const updatedGuest = prisma.guest.update(guest, {
        data: {
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            age: credentials.age,
            img: credentials.img,
            country: credentials.country
        }
    });

    res.code(200).body({
        message: 'Success',
        data: updatedGuest
    })
}

async function updateGuestAddContact(req, res) {
    function validateContact(contact) {
        return contact.contactType && contact.contactValue;
    }
    const guestId = req.params.id;
    const contact = req.body;
    const guest = await prisma.guest.findUnique({
        where: {
            guestId: guestId
        }
    })

    if (!validateContact(contact) || guest === null) {
        res.code(400).body({ message: 'Bad Request', data: contact });
        return;
    }

    contact.guestId = guest.guestId;
    const contactId = await prisma.contactGuest.create({
        data: {
            contactType: contact.contactType,
            contactValue: contact.contactValue,
            guestId: guestId,
            guest: {
                connect: guestId
            }
        }
    }).contactId;

    const updatedGuest = await prisma.guest.update({
        guest,
        data: {
            contactGuest: {
                connect: contactId
            }
        }
    });

    res.code(200).body({
        message: 'Success',
        data: updatedGuest
    });


}



module.exports = {
    getAllGuests, getGuestById, postGuest, deleteGuestById, updateGuest, updateGuestAddContact
};