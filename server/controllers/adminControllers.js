const prisma = require("../lib/prisma");

async function getAllAdmin(req,res){
    try{
        const admins=await prisma.admin.findMany()
    if(!admins) return res.status(400).json({status:400,message:"no admin found"})
    return res.status(200).json({
        status:200,
        data:admins
    })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"something went wrong"})
    }
}
module.exports={getAllAdmin}