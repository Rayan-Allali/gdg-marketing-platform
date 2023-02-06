const router =require("express").Router();
const { getAllCompanies, getCompany, AddCompany, deleteCompany, updateCompany } = require("../controllers/companieControllers");


router.get('/', getAllCompanies)

router.get('/:companieId',getCompany)

router.delete('/delete/:companieId',deleteCompany)
router.post('/add',AddCompany);
router.patch('/update/:companieId',updateCompany)

module.exports =router