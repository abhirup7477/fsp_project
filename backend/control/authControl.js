const jwt = require("jsonwebtoken")
const {
    createUser, findByUser
} = require("../models/userModels")


const registerUser = async (req, res) => {
    const {email, uid, createdAt} = req.body;

    if (!email || !uid){
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try {
        const result = await createUser(email,uid, createdAt);
        return res.status(200).json({message:"User register successfully", result});
    } catch (error) {
        if (error.code === 11000){
            return res.status(400).json({message:"User already exists"})
        }
        return res.status(500).json({message: "Internal server error", error})
    }
}

const LoginUser = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    findByUser(email,(err, result) => {
        if (err) {
            return res.status(500).json({message:"Internal server error"})
        }

        if (result.length === 0){
            return res.status(400).json({message:"User not found"})
        }

        const user = result[0];

        const payload = {
            uid: user.uid,
        }

        const accessToken = jwt.sign(payload, process.env.JWT, {
            expiresIn: "1h",
        })

        return res.json({message:"Login Successfull", accessToken})
    })
}

const loginWithGoogle = async (req, res) => {
    const {email} = req.body;

    findByUser(email,(err, result) => {
        if (err) {
            return res.status(500).json({message:"Internal server error"})
        }

        if (result.length === 0){
            return res.status(400).json({message:"User not found"})
        }

        const user = result[0];

        const payload = {
            uid: user.uid,
        }

        const accessToken = jwt.sign(payload, process.env.JWT, {
            expiresIn: "1h",
        })

        return res.json({message:"Login Successfull", accessToken})
    })
}



module.exports = {
    registerUser, LoginUser, loginWithGoogle
}