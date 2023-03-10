const express=require('express')
const cors=require('cors')
const morgan=require('morgan');
const adminRoute = require('./routes/adminRoutes');

const app=express();

app.use(cors());
app.use(express.json());
app.use('/api/companie',require("./routes/companieRoutes"))
app.use('/api/guest',require("./routes/guestRoutes"))
app.use("/api/role",require("./routes/roleRoutes"))
app.use("/api/event",require("./routes/eventRoutes"))
app.use(morgan('combined'))
app.use((req,res,next)=>{
    console.log("hello from the middleware")
    next();
})
app.get("/api", (req, res) => {
    res.send("hello from the server")
   });
app.use("/api/admin",adminRoute )
   module.exports =app;