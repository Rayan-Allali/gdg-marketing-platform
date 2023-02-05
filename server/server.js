//const dotenv=require('dotenv')
const app=require('./app.js')
//dotenv.config({path: './config.env'})

//const PORT=process.env.PORT || 8000
app.listen(8000,()=>{
    console.log(`listening in port 8000`)
})