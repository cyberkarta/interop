const bcrypt = require('bcrypt')
const User = require('../../models/User')
module.exports = {
    index: async(req,res)=>{
        try {
            if(req.session.user === null || req.session.user === undefined){
                res.render('index',{
                    title : 'Login'
                })
            }
            else{
                res.redirect('/pasien')
            }
        } catch (error) {
            console.log(error)
        }
    },
    actionLogin : async(req,res)=>{
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                email : email
            });

            if(user){
                const checkPassword = await bcrypt.compare(password, user.password)
                if(checkPassword){
                    req.session.user = {
                        id : user._id,
                        email: user.email
                    }
                    res.redirect('/pasien')
                }else{
                    console.log("Password Salah")
                    res.redirect('/')
                }
            }
            else{
                console.log("User tidak ditemukan")
                res.redirect('/')
            }
        } catch (error) {
            console.log(error)
        }
    },
    actionLogout: async(req, res)=>{
        req.session.destroy();
        res.redirect('/');
    },
}