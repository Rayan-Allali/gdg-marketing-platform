const router =require("express").Router();
const{PrismaClient}=require("@prisma/client")
const {companie}=new PrismaClient()

router.get('/', async (req,res)=>{
    const companies= await companie.findMany({});
    res.json(companies)
})

router.get('/:companieId',async(req,res)=>{
    const company =await companie.findUnique({
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
    if (company){
    res.json(company)
    }
    else return res.status(404).json({
        msg:"company not found"
    })
})

router.delete('/delete/:companieId',async(req,res)=>{
    try{
    const company= await companie.delete({
        where:{
            companieId:Number(req.params.companieId),
        },
    })
    res.json("deleted")}
    catch{
        res.status(404).json({
            msg:"company not found"
        })

    }
})

router.post('/add',async(req,res)=>{
    const {name,img,country,size,locations,contacts,notes,roles}=req.body
    const newCompanie= await companie.create({
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
    if (newCompanie){
    res.status(201).json(newCompanie)}
    else return res.status(404).json({
        msg:"companie was not created"
    })
    });
router.patch('/update/:companieId',async(req,res)=>{
    const {name,img,country,size,locations,contacts,notes,roles}=req.body
    try{
    const updatedCompanie= await companie.update({
        where:{
            companieId:Number(req.params.companieId)
        },
        data:{
            name,
            img,
            country,
            size,
        }
    })
    res.json(updatedCompanie)
    }
    catch {return res.status(404).json("companie not found")}

})

module.exports =router