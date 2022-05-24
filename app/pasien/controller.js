const Pasien = require('../../models/Pasien')
module.exports = {
    index: async(req,res)=>{
        try {
            const pasien = await Pasien.find()
            res.render('pasien/view',{
                title:'Pasien',
                pasien
            })
        } catch (error) {
            console.log(error)
        }
    },
    createView: async(req,res)=>{
        try {
            res.render('pasien/create',{
                title:'Tambah Pasien'
            })
        } catch (error) {
            console.log(error)
        }    
    },
    actionCreate : async(req,res)=>{
        try {
            const {
                nik, 
                nama,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi,
                no_hp,
                kontakNama, 
                hubungan, 
                kontakAlamat, 
                kontakKelurahan,
                kontakKecamatan, 
                kontakKabupaten, 
                kontakProvinsi, 
                kontakNoHp} = req.body

            const alamatPasien = {
                alamat : alamat,
                kelurahan : kelurahan,
                kecamatan : kecamatan,
                kabupaten : kabupaten,
                provinsi : provinsi
            }
            const kontakPasien = {
                nama : kontakNama,
                hubungan : hubungan,
                no_hp : kontakNoHp,
                alamat : {
                    alamat : kontakAlamat,
                    kelurahan : kontakKelurahan,
                    kecamatan : kontakKecamatan,
                    kabupaten : kontakKabupaten,
                    provinsi : kontakProvinsi
                }
            }
            let pasien = await Pasien({
                nik, 
                nama, 
                alamat : alamatPasien, 
                kontak : kontakPasien, 
                no_hp
            })
            await pasien.save();
            res.redirect('/pasien')
        } catch (error) {
            console.log(error)
        }
    },
    viewEdit : async(req,res)=>{
        try {
            const {id} = req.params
            const pasien = await Pasien.findOne({_id : id})
            res.render('pasien/edit',{
                title:'Pasien',
                pasien
            })
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit : async(req,res)=>{
        try {
            const {id} = req.params
            const {
                nik, 
                nama,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi,
                no_hp,
                kontakNama, 
                hubungan, 
                kontakAlamat, 
                kontakKelurahan,
                kontakKecamatan, 
                kontakKabupaten, 
                kontakProvinsi, 
                kontakNoHp} = req.body
                const alamatPasien = {
                    alamat : alamat,
                    kelurahan : kelurahan,
                    kecamatan : kecamatan,
                    kabupaten : kabupaten,
                    provinsi : provinsi
                }
                const kontakPasien = {
                    nama : kontakNama,
                    hubungan : hubungan,
                    no_hp : kontakNoHp,
                    alamat : {
                        alamat : kontakAlamat,
                        kelurahan : kontakKelurahan,
                        kecamatan : kontakKecamatan,
                        kabupaten : kontakKabupaten,
                        provinsi : kontakProvinsi
                    }
                }
            const pasien = await Pasien.findOneAndUpdate({
                _id:id
            },{
                nik, 
                nama, 
                alamat : alamatPasien, 
                kontak : kontakPasien, 
                no_hp
            })
            res.redirect('/pasien')
        } catch (error) {
            console.log(error)
        }
    }
}