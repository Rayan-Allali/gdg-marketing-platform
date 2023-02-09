const prisma = require("../lib/prisma");

exports.getAllCompanies=async(req,res)=>{
    try{ const companies= await prisma.companie.findMany({});
           return  res.json(companies)
        
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.getCompany=async(req,res)=>{
    try{ const id=req.params
        if(!id)return res.status(400).json({message:"invalid id"})
        const company =await prisma.companie.findUnique({
            where:{
                companieId:Number(req.params.companieId),
            },
            include:{
                Locations:true,
                notes:true,
                roles:true,
                contacts:true,
            },
        })
        if(!company ){
            return res.status(404).json({message: 'company not found'})
        }
        res.status(200).json(company)
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.getCompany=async(req,res)=>{
    try{ const id=req.params
        if(!id)return res.status(400).json({message:"invalid id"})
        const company =await prisma.companie.findUnique({
            where:{
                companieId:Number(req.params.companieId),
            },
            include:{
                Locations:true,
                notes:true,
                roles:true,
                contacts:true,
            },
        })
        if(!company ){
            return res.status(404).json({message: 'company not found'})
        }
        res.status(200).json(company)
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.AddCompany=async(req,res)=>{
    try{    
   const {name,img,country,size,locations,contacts,notes,roles}=req.body
    if(!name || !img || !country || !size || !locations || !contacts) return res.status(400).json({message:"important data are missinng"})
    let newCompanie
    if(!notes){
        newCompanie= await prisma.companie.create({
            data:{
                name,
                img,
                country,
                size,
                roles:{
                    create:roles
                    },
                Locations:{
                    create:locations
                },
                contacts:{
                    create:contacts
                }
                }
            })
    }else{
        newCompanie= await prisma.companie.create({
            data:{
                name,
                img,
                country,
                size,
                roles:{
                    create:roles
                    },
                notes:{
                    create:notes
                },
                Locations:{
                    create:locations
                },
                contacts:{
                    create:contacts
                }
                }
            })
    }
    
    return res.status(201).json(newCompanie)
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.deleteCompany=async(req,res)=>{
    try{ 
        if(!id)return res.status(400).json({message:"invalid id"})
        const company =await prisma.companie.findUnique({
            where:{
                companieId:Number(req.params.companieId),
            },
        })
        if(!company ){
            return res.status(404).json({message: 'company not found'})
        }
    
        const Deletedcompany =await prisma.companie.delete({
            where:{
                companieId:Number(req.params.companieId),
            }
        })
    return res.status(204).json({status:204,data:null})
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.updateCompany=async(req,res)=>{
    try{ 
        if(!id)return res.status(400).json({message:"invalid id"})
        const company =await prisma.companie.findUnique({
            where:{
                companieId:Number(req.params.companieId),
            },
            include:{
                Locations:true,
                notes:true,
                roles:true,
                contacts:true,
            },
        })
        if(!company ){
            return res.status(404).json({message: 'company not found'})
        }
    
        const {name,img,country,size,locations,contacts,roles}=req.body
    if(!name && !img && !country && !size && !locations && !contacts && !roles) return res.status(400).json({message:"important data are missinng"})
        const updatedCompany =await prisma.companie.update({
            where:{
                companieId:Number(req.params.companieId),
            },
        data:{
            name,
            img,
            country,
            size,
        }
        })
    return res.status(204).json({status:204,data:null})
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}