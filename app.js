const express=require('express')
const app =express()
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const studentRoute=require('./routes/student')
const facultyRoutes=require('./routes/faculty')
const userRoute=require('./routes/user')
const PartnershipsRoute=require('./routes/partnerships')
const student2Route=require('./routes/student2')
const tripRoute=require('./routes/trip')
const indiaRoute=require('./routes/india')
const hotelsRoute=require('./routes/hotels')
const bookhotelsRoute=require('./routes/bookhotels')
const packageRoute=require('./routes/Package')
const comprehensiveRoute=require('./routes/Comprehensive')
const singaporeRoute=require('./routes/Singapore')

const port=process.env.PORT || 3000;



mongoose.connect('mongodb+srv://root:admin@cluster2.qzqvwit.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
})
// mongodb+srv://root:<password>@cluster2.qzqvwit.mongodb.net/?retryWrites=true&w=majority
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



app.use('/student',studentRoute)
app.use('/student2',student2Route)

app.use('/faculty',facultyRoutes)
app.use('/user', userRoute)
app.use('/partnerships',PartnershipsRoute)
app.use('/trip',tripRoute)
app.use('/india',indiaRoute)
app.use('/hotels',hotelsRoute)
app.use('/bookhotels',bookhotelsRoute)
app.use('/package',packageRoute)
app.use('/comprehensive',comprehensiveRoute)
app.use('/singapore',singaporeRoute)




app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

app.listen(port,()=>{
    console.log(`connection is live at  port no ${port}`)
})

module.exports=app