// bdl kolch l mongoose 
const User = require('../models/User')
const bcrypt = require('bcryptjs')

let login  = async  (req,res)=>{
    const { email, password } = req.body;

    try {
        const user  = await User.find(user => user.email == email);
        if(!user){
            return res.status(400).json({ msg: 'no user found' })
        }
        if (password !== user.password) {
            return res.status(400).json({ msg: 'incorrect password' })
        }    

    } catch (error) {
        
    }
    
 
    res.status(200).json({ msg: 'user created', token })
}

let register = async (req,res)=>{
    const { username, email, password } = req.body
    if (!username || !password || !email) {
        return res.status(400).json({ msg: 'fill all the credentials' })
    }

    let userData = {
        username,
        email,
        password
    }

    const user =  await User.create(...userData);
    
    res.status(200).json({ msg: 'user created', ...user })
}

module.exports = {
    login,
    register
}


