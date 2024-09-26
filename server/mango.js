const mongoose =require("mongoose")


const mongoURI = 'mongodb+srv://withgamergaming764:8848@logindata.wlhlo.mongodb.net/?retryWrites=true&w=majority&appName=loginData';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error: ', err));

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =mongoose.model("collection",newSchema)

module.exports=collection