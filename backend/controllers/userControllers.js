import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const exists = await userModel.findOne({ email });
    // checking user existance 
    if (exists) {
        return res.json({ success: false, message: "User already exists" })
    }
    // validATING EMAIL and PASSWORD 
    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Enter valid E-Mail" })
    }
    if (password.length < 8) {
        return res.json({ success: false, message: "Enter strong password" })
    }
    if (phone.length !== 10) {
        return res.json({ success: false, message: "Please valid phone number" })
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new userModel({
        name,
        email,
        phone,
        password: hashedPassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

//API FOR USER LOGIN
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//Admin Login
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { loginUser, registerUser, adminLogin }