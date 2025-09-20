const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const multer=require('multer')

const app= express()
app.use (express.json())
app.use(cors())


app.listen(8000,(req,res)=>{
    console.log("server working")
})

mongoose.connect("mongodb+srv://ishitatwal:pxYdw7CXau6lIN2C@cluster0.k8c1yjx.mongodb.net/CARCOLLECTION")
.then(()=>{
    console.log("mongo connect")
})

let picname
const mystorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename:  (req, file, cb) => {
     picname = Date.now() + file.originalname;
    cb(null, picname)
  }
})
const upload = multer({ storage: mystorage })

const addcarschecma=mongoose.Schema({

    brand: String,
    description: String,
    file: String,
    doors:String,
    passenger:String
})





const carcategorymodel=mongoose.model("car",addcarschecma,"car")

app.post("/addcar",upload.single("file"),async(req,res)=>{
    const result=new carcategorymodel({
 
    brand: req.body.brand,
    description: req.body.description,
    file: picname,
    doors:req.body.doors,
    passenger:req.body.passenger
    })
    const rr= await result.save();
    if (rr){
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }


})

app.get("/showcar",async(req,res)=>{
    const result= await carcategorymodel.find()
    if(result){
        res.send({statuscode:1, data:result})
    }
    else{
        res.send({statuscode:0})
    }
})


const addsubcarschecma=mongoose.Schema({

    brand: String,
    description: String,
    file: String,
    doors:String,
    passenger:String,
    carid:String
})





const subcarcategorymodel=mongoose.model("subcar",addsubcarschecma,"subcar")

app.post("/addsubcars",upload.single("file"),async(req,res)=>{
    const result =new subcarcategorymodel({
 
    brand: req.body.brand,
    description: req.body.description,
    file: picname,
    doors:req.body.doors,
    passenger:req.body.passenger,
    carid:req.body.carid
    })
    const rr= await result.save();
    if (rr){
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }
})
// app.get("/showsubcar",async(req,res)=>{
//     const result= await subcarcategorymodel.find({carid:req.params.id})
//     if(result){
//         res.send({statuscode:1, data:result})
//     }
//     else{
//         res.send({statuscode:0})
//     }
// })

app.get("/showsubcars/:id",async(req,res)=>{
    const result= await subcarcategorymodel.find({carid:req.params.id})
    if(result){
        res.send({statuscode:1, data:result})
    }
    else{
        res.send({statuscode:0})
    }
})









const addbooking=mongoose.Schema({

    passengerName: String,
    carModel: String,
    days: String,
    pickupdate:String,
    address:String,
    idproof:String,
    contact:String,
    notes:String
    
})



const addbookingmodel=mongoose.model("bookingcar",addbooking,"bookingcar")

app.post("/booking",async(req,res)=>{
    const result =new addbookingmodel({
 
    passengerName: req.body.passengerName,
    carModel: req.body.carModel,
    days: req.body.days,
    pickupdate:req.body.pickupdate,
    address:req.body.address,
    idproof:req.body.idproof,
    contact:req.body.contact,
    notes:req.body.notes
    })
    const rr= await result.save();
    if (rr){
        res.send({statuscode:1})
    }
    else{
        res.send({statuscode:0})
    }
})

paymentschema=mongoose.Schema({
    address:String,
    holder:String,
    acc:String,
    pincode:String,
    contact:String,
    orderid:String,
})

paymentmodel=mongoose.model("paymentmethod",paymentschema,"paymentmethod")
app.post("/payment",async(req,res)=>{
const result= new paymentmodel ({

   address:req.body.address,
    holder:req.body.hname,
    acc:req.body.acc,
    pincode:req.body.pincode,
    contact:req.body.phone, 
    orderid:req.body.orderid
})
const rr= await result.save();
if(!rr){
    res.send({statuscode:0})
}else{
        res.send({statuscode:1})
}
})
app.get('/spayment/:id', async (req, res) => {
    const result = await paymentmodel.findOne({orderid:req.params.id});

    if(result){
        res.send({statuscode:1,data:result})
    }
    else{
        res.send({statuscode:0})
    }
})


registerschema=mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    utype:String
    
})

registermodel=mongoose.model("register",registerschema,"register")
app.post("/register",async(req,res)=>{
const result= new registermodel ({

   firstname:req.body.fname,
    lastname:req.body.lname,
    email:req.body.email,
    password:req.body.password,
    utype:"user"
    
})
const rr= await result.save();
if(!rr){
    res.send({statuscode:0})
}else{
        res.send({statuscode:1})
}
})

app.post('/login',async(req,res)=>{

    const result=await registermodel.findOne({email:req.body.email})

    if (result.password===req.body.password){
       if(result.utype==="user"){
        res.send({statuscode:1,utype:"user",memberdata:result})
       }else{
        res.send({statuscode:1,utype:"admin",memberdata:result})
       }
    }else{
        res.send({statuscode:0})
    }
})


































































































































































































































































































































































































































































































































































































































































































































































































































