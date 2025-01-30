const express = require("express")
const {registerUser, LoginUser, loginWithGoogle} = require("../../control/authControl")

const router = express.Router()

router.post("/register", registerUser)

router.post("/login", async (req, res) => {
    const {email, password, provider} = req.body;

    if (provider === "google"){
        loginWithGoogle(req, res);
    }
    else if (provider === "email" && email && password){
        return LoginUser(req, res)
    }
    else{
        return res.status(400).json({message: "Invalid"})
    }
})

module.exports = router;