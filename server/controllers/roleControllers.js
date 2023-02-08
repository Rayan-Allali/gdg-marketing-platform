const prisma = require("../lib/prisma");

async function getAllRoles(req,res){
    try{
    const roles= await prisma.role.findMany({})
    res.status(200).json(roles)
    }
    catch{
        return res.status(500).json({msg:"error"})
    }
}
async function getRole(req,res){
    try{
        const uniquerole= await prisma.role.findUnique({
            where:{
                roleId:Number(req.params.roleId)
            }
        })
    if (uniquerole){
        res.status(200).json(uniquerole)
    }
    else return res.status(404).json({
        msg:"role not found"
    })
    }
    catch{
        res.status(500).json({msg:"error"})
    }
}
async function deleteRole(req,res){
    try{
    const uniquerole= await prisma.role.delete({
        where:{
            roleId:Number(req.params.roleId)
        }
    })
        res.status(200).json("deleted")
    }
    catch{ 
        return res.status(404).json({msg:'role not found'})
    }
}

async function addRole(req,res){
    const {roleType,roleValue}=req.body
        const newrole=await prisma.role.create({
            data:{
                roleValue,
                roleType
            }
        })
        if (newrole){
                res.status(201).json(newrole)
        }
        else return res.status(500).json({msg:"failed to create"})
}
async function updateRole(req,res){
    const {roleType,roleValue}=req.body
    try{
    const updatedrole= await prisma.role.update({
        where:{
            roleId:Number(req.params.roleId)
        },
        data:{
            roleValue,
            roleType,
        }
    })
    if (updatedrole){
        res.json(updatedrole)
    }
    }
    catch{
        return res.status(404).json({msg:"role not found"})
    }

}

module.exports={getAllRoles,getRole,deleteRole,addRole,updateRole}