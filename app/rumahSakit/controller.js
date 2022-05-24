const RumahSakit = require('../../models/RumahSakit')
module.exports = {
    index: async(req,res)=>{
        try {
            const rumahSakit = await RumahSakit.find()
            res.render('rumahsakit/view',{
                title:'Rumah Sakit',
                rumahSakit
            })
        } catch (error) {
            console.log(error)
        }
    },
    createView: async(req,res)=>{
        try {
            res.render('rumahsakit/create',{
                title:'Tambah Rumah Sakit'
            })
        } catch (error) {
            console.log(error)
        }    
    },
    actionCreate : async(req,res)=>{
        try {
            const {jenis, nama, alamat, kelurahan, kecamatan, kabupaten, provinsi} = req.body
            let rumahSakit = await RumahSakit({jenis, nama, alamat, kelurahan, kecamatan, kabupaten, provinsi})
            const data = await rumahSakit.save();
            res.redirect('/rumahsakit')
        } catch (error) {
            console.log(error)
        }
    },
    viewEdit : async(req,res)=>{
        try {
            const {id} = req.params
            const rumahsakit = await RumahSakit.findOne({_id : id})
            res.render('rumahsakit/edit',{
                title:'Edit Rumah Sakit',
                rumahsakit
            })
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit : async(req,res)=>{
        try {
            const {id} = req.params
            const {jenis, nama, alamat, kelurahan, kecamatan, kabupaten, provinsi} = req.body
            const rumahsakit = await RumahSakit.findOneAndUpdate({
                _id:id
            },{
                jenis, 
                nama, 
                alamat, 
                kelurahan, 
                kecamatan, 
                kabupaten, 
                provinsi
            })
            res.redirect('/rumahsakit')
        } catch (error) {
            console.log(error)
        }
    }
}