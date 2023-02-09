const prisma = require("../lib/prisma");

exports.getAllGuests=async(req,res)=>{
    try{ const guests= await prisma.guest.findMany({});
           return  res.json(guests)
        
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.getGuest=async(req,res)=>{
    try{ const id=req.params
        if(!id)return res.status(400).json({message:"invalid id"})
        const guest =await prisma.guest.findUnique({
            where:{
                guestId:Number(req.params.guestId),
            },
            include:{
                notes:true,
                roles:true,
                contacts:true,
                attends:true
            },
        })
        if(!company ){
            return res.status(404).json({message: 'company not found'})
        }
        res.status(200).json(guest)
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}



exports.AddGuest=async(req,res)=>{
    try{    
   const {firstName,lastName,country,age,img,contacts,notes,roles,atends}=req.body
    if(!firstName ||!lastName || !img || !country || !contacts) return res.status(400).json({message:"important data are missinng"})
    let newGuest
    if(!notes){
        newGuest= await prisma.guest.create({
            data:{
                firstName,
                lastName,
                img,
                country,
                age,
                roles:{
                    create:roles
                    },
                contacts:{
                    create:contacts
                }
                }
            })
    }else{
        newGuest= await prisma.guest.create({
            data:{
                firstName,
                lastName,
                age,
                img,
                country,
                roles:{
                    create:roles
                    },
                notes:{
                    create:notes
                },
                contacts:{
                    create:contacts
                }
                }
            })
    }
    
    return res.status(201).json(newGuest)
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.deleteGuest=async(req,res)=>{
    try{ 
        if(!id)return res.status(400).json({message:"invalid id"})
        const guest =await prisma.guest.findUnique({
            where:{
                guestId:Number(req.params.guestId),
            },
        })
        if(!guest){
            return res.status(404).json({message: 'company not found'})
        }
    
        const DeletedGuest =await prisma.guest.delete({
            where:{
                guestId:Number(req.params.guestId),
            }
        })
    return res.status(204).json({status:204,data:null})
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}

exports.updateGuest=async(req,res)=>{
    try{ 
        if(!id)return res.status(400).json({message:"invalid id"})
        const company =await prisma.guest.findUnique({
            where:{
                guestId:Number(req.params.guestId),
            },
            include:{
                notes:true,
                roles:true,
                contacts:true,
            },
        })
        if(!guest ){
            return res.status(404).json({message: 'guest not found'})
        }
    
        const {firstName,lastName,img,country,age,contacts,roles}=req.body
    if(!firstName && !lastName && !img && !country && !age && !contacts && !roles) return res.status(400).json({message:"important data are missinng"})
        const updatedGuest =await prisma.guest.update({
            where:{
                guestId:Number(req.params.guestId),
            },
        data:{
            firstName,
            lastName,
            country,
            age,
        }
        })
    return res.status(200).json({updatedGuest})
    }catch(err){
        console.error(err);
        return res.status(500).json({message:" something went wrong"});
    }
}