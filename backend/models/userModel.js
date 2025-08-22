import mongoose from "mongoose";

//USER MODEL TO STORE DATA ON DATABASE 

const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData:{type: Object, default:{}},
    phone: { type: String, required:true, default:"+91000000000" }
    
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel