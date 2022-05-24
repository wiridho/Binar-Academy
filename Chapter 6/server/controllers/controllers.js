// import json data user pada tabel user_game di database
const {
    user_game,
    user_game_biodata
} = require('../../models');



// Handler playgame
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


//Ke tampilan halaman dashboard
const dashboard = (req, res) => {
    return res.status(200).render('dashboard/dashboard', {
        title: 'Dashboard'
    })
}


//Dashboard users untuk semua user
const dashboardUsers = (req, res) => {
    user_game.findAll().then(user_game => {
        res.render('dashboard/dashboard_user', {
            user_game
        })
    })
}

//Untuk semua biodata user
const userBiodata = async (req, res) => {
    const userGame = await user_game.findOne({
        where: {
            id: req.params.id
        },
    });
    const user_Biodata = await user_game_biodata.findAll({
        where: {
            id_user: req.params.id,
        },
    });

    return res.sender('dashboard/dashboard_users_id', {
        userGame,
        user_Biodata
    })
}

//Get form & create
const create_form = (req, res) => {
    return res.render('dashboard/dashboard_create_form.ejs');
}

const create_user = (req, res) => {
    user_game.create({
            username: req.body.username,
            password: req.body.password,
            user_game_biodatum: {
                fullname: req.body.fullname,
                email: req.body.email
            }
        }, {
            include: {
                model: user_game_biodata,
            }
        })
        .then(() => {
            res.send('akun berhasil dibuat')
        })
        .catch(() => {
            res.send('akun GAGAL dibuat')
        })
}




//Delete 
// const delete_user = (req, res) => {
//     user_game_biodata.destroy({
//         where: {
//             id_user: req.params.id_user
//         }
//     })
//     user_game.destroy({
//         where: {
//             id: req.params.id
//         }
//     })

//     return res.send('User Game dan Biodata telah dihapus')
// }
//Delete untuk biodata user
// const delete_user_biodata = (req, res) => {
//     user_game_biodata.destroy({
//         where: {
//             id_user: req.params.id_user
//         }
//     })
// }

//Update

// Mendapatkan isi form user dari id
let update_form = (req, res) => {
    user_game.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(user_game => {
            res.render('dashboard/dashboard_update_userGame.ejs', {
                user_game
            })
        })
}

let update_user = (req, res) => {
    user_game.update({
            username: req.body.username,
            password: req.body.password
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('user_Game berhasil di update!')
        })
}


//Update user game
// POST untuk perbarui user_game by id



//Export 
module.exports = {
    home,
    playGame,
    loginIndex,
    showuser,
    showUserid,
    loginUser,
    dashboard,
    dashboardUsers,
    userBiodata,
    create_form,
    create_user,
    update_form,
    update_user,
}