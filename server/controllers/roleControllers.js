const{PrismaClient}=require("@prisma/client")
const {role}=new PrismaClient()

async function getAllRoles(req,res){
    try{
    const roles= await role.findMany({})
    res.json(roles)
    }
    catch{
        return res.status(500).json({msg:"error"})
    }
}
async function getRole(req,res){
    try{
        const uniquerole= await role.findUnique({
            where:{
                roleId:Number(req.params.roleId)
            }
        })
    if (uniquerole){
        res.json(uniquerole)
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
    const uniquerole= await role.delete({
        where:{
            roleId:Number(req.params.roleId)
        }
    })
        res.json("deleted")
    }
    catch{ 
        return res.status(404).json({msg:'role not found'})
    }
}

async function addRole(req,res){
    const {roleType,roleValue}=req.body
        const newrole=await role.create({
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
    const updatedrole= await role.update({
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