const admin = require("../controllers/adminControllers");
const express=require('express');
const router=express.Router();

router.route("/").get(admin.getAllAdmin)


module.exports=router