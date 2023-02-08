const prisma = require("../lib/prisma");

//Getting all events
exports.getAllEvents=async (req, res) => {
    try {
        const events = await prisma.event.findMany();
        if (!events) return res.status(400).json({ status: 400, message: "No events found" });
        return res.status(200).json({
            status: 200,
            data: events
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: 500, message: "something went wrong" });
    }
}




//Getting an event 
exports.getEvent=async(req,res)=>{
  try{ const id=req.params
      if(!id)return res.status(400).json({message:"Event doesn't exist"})
      const event =await prisma.event.findUnique({
          where:{
              eventId:Number(req.params.eventId),
          },
          include:{
              attends:true,
          },
      })
      if(!event ){
          return res.status(404).json({message: "event doesn't exist"})
      }
      res.status(200).json(event)
  }catch(err){
      console.error(err);
      return res.status(500).json({message:"something went wrong..."});
  }
}



//Creating an event 
exports.addEvent=async(req, res) => {
  try {
    const { Name,img,attends} = req.body;
    if(!Name || !img || !attends) return res.status(400).json({message:"incomplete data"})
    const event = await prisma.event.create({
      data: {
        Name,
        img,
        attends:{
          create:attends
          },
      },
    });
    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong..." });
  }
}



//Updating an event 
exports.UpdateEvent = async (req, res) => {
  try {
    const id = req.params.eventId;
    if (!id) return res.status(400).json({ message: "Event doesn't exist" });

    const { name, img } = req.body;
    const event = await prisma.event.update({
      where: {
        eventId: Number(id),
      },
      data: {
        name,
        img,
        attends:{
          create:attends
          },
      },
    });
    if (!event) {
      return res.status(404).json({ message: "event doesn't exist" });
    }
    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong..." });
  }
};



//Deleting an event

exports.deleteEvent = async (req, res) => {
  try {
    const id = req.params.eventId;
    if (!id) return res.status(400).json({ message: "Event doesn't exist" });

    const event = await prisma.event.delete({
      where: {
        eventId: Number(id),
      },
    });

    if (!event) {
      return res.status(404).json({ message: "event doesn't exist" });
    }
    res.status(200).json({ message: "event deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong..." });
  }
};

// updating an event
exports.updateEvent=async(req,res)=>{
  try{ 
      if(!id)return res.status(400).json({message:""})
      const event =await prisma.event.findUnique({
          where:{
              eventID:Number(req.params.eventId),
          },
          include:{
              attends:true,
          },
      })
      if(!company ){
          return res.status(404).json({message: 'Event doesnt exist'})
      }
  
      const {Name,img,attends}=req.body
  if(!Name && !img && !attends ) return res.status(400).json({message:"missing data"})
      const updatedEvent =await prisma.event.update({
          where:{
              eventId:Number(req.params.eventId),
          },
      data:{
          Name,
          img,
        
      }
      })
  return res.status(204).json({status:204,data:null})
  }catch(err){
      console.error(err);
      return res.status(500).json({message:" something went wrong"});
  }
}
