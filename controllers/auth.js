

let login  = (req,res)=>{
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ msg: 'need username and password' })
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '30d',
    })
    res.status(200).json({ msg: 'user created', token })
}

let register = async (req,res)=>{
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ msg: 'need username and password' })
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '30d',
    })
    res.status(200).json({ msg: 'user created', token })
}

module.exports = {
    login,
    register
}
