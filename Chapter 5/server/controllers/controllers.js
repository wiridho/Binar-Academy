//Handler playgame
const playGame = (req, res) => {
    return res.render('game.ejs')
}
//Handler home
const home = (req, res) => {
    return res.render('index.ejs')
}
//Handler ke halaman login
const loginIndex = (req, res) => {
    return res.render('login.ejs', {
        title: 'login page'
    })
}

// Handler show semua user
const showuser = (req, res) => {
    //import data users
    const user = require('../../db/user.json')
    res.status(200).json(user)
}

// Handler show user by id
const showUserid = (req, res) => {
    const user = require('../../db/user.json')
    const data = user.find((item) => {
        return item.id == req.params.id;
    })
    if (!data) {
        res.status(404).json({
            message: 'User tidak ditemukan'
        });
    }

    res.status(200).json(data);
}

const loginUser = (req, res) => {
    const user = require('../../db/user.json')
    // Insert Login Code Here
    let email = req.body.email;
    let password = req.body.password;
    return res.send(`Email: ${email} Password: ${password}`);
}

//Export 
module.exports = {
    home,
    playGame,
    loginIndex,
    showuser,
    showUserid,
    loginUser,
}