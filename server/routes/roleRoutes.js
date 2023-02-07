const role = require("../controllers/roleControllers");
const express=require('express');
const router=express.Router();

router.route("/").get(role.getAllRoles)
router.route("/:roleId").get(role.getRole)
router.route("/delete/:roleId").get(role.deleteRole)
router.route("/add").post(role.addRole)
router.route("/update/:roleId").patch(role.updateRole)
module.exports=router