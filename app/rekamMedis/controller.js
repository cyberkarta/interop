const Pasien = require('../../models/Pasien')
const RumahSakit = require('../../models/RumahSakit')
const RekamMedis = require('../../models/RekamMedis')
module.exports = {
    index: async(req,res)=>{
        try {
            const { id } = req.params
            const pasien = await Pasien.findOne({_id : id})
            const rekammedis = await RekamMedis.find({pasien : id}).populate('rumah_sakit')
            res.render('rekammedis/view',{
                title:'Rekam Medis',
                pasien, rekammedis
            })
        } catch (error) {
            console.log(error)
        }
    },
    viewCreate : async(req,res)=>{
        try {
            const { id } = req.params
            const pasien = await Pasien.findOne({_id : id})
            const rumahsakit = await RumahSakit.find();
            res.render('rekammedis/create',{
                title:'Create Rekam Medis',
                pasien,
                rumahsakit
            })
        } catch (error) {
            console.log(error)
        }
    },
    actionCreate : async(req,res)=>{
        try {
            const { id } = req.params
            const {
                rumahsakit,
                tanggal,
                tanggalkeluar,
                diagnosis,
                hasilpemeriksaanfisik,
                hasilpemeriksaanpenunjang,
                diagnosisakhir,
                pengobatantindakan,
                tindaklanjut,
                dokter
            } = req.body
            let rekammedis = await RekamMedis({
                pasien : id,
                rumah_sakit : rumahsakit,
                tanggal,
                tanggal_keluar : tanggalkeluar,
                diagnosis,
                hasil_pemeriksaan_fisik : hasilpemeriksaanfisik,
                hasil_pemeriksaan_penunjang : hasilpemeriksaanpenunjang,
                diagnosis_akhir : diagnosisakhir,
                pengobatan_tindakan : pengobatantindakan,
                tindak_lanjut : tindaklanjut,
                dokter
            })
            await rekammedis.save()
            res.redirect(`/rekammedis/${id}`)
        } catch (error) {
            console.log(error)
        }
    },
    viewSingle : async(req,res)=>{
        try {
            const {id} = req.params
            const rekammedis = await RekamMedis.findOne({_id : id}).populate('pasien').populate('rumah_sakit')
            res.render('rekammedis/single',{
                title:'Rekam Medis Pasien', 
                rekammedis
            })
        } catch (error) {
            
        }
    },
    viewEdit : async(req,res)=>{
        try {
            const {id} = req.params
            const rekammedis = await RekamMedis.findOne({_id : id}).populate('pasien').populate('rumah_sakit')
            const rumahsakit = await RumahSakit.find()
            res.render('rekammedis/edit',{
                title:'Edit Rekam Medis Pasien', 
                rekammedis, rumahsakit
            })
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit : async(req,res)=>{
        try {
            const { id } = req.params
            const {
                rumahsakit,
                tanggal,
                tanggalkeluar,
                diagnosis,
                hasilpemeriksaanfisik,
                hasilpemeriksaanpenunjang,
                diagnosisakhir,
                pengobatantindakan,
                tindaklanjut,
                dokter
            } = req.body
            const rekammedis = await RekamMedis.findOneAndUpdate({
                _id:id
            },{
                rumah_sakit : rumahsakit,
                tanggal,
                tanggal_keluar : tanggalkeluar,
                diagnosis,
                hasil_pemeriksaan_fisik : hasilpemeriksaanfisik,
                hasil_pemeriksaan_penunjang : hasilpemeriksaanpenunjang,
                diagnosis_akhir : diagnosisakhir,
                pengobatan_tindakan : pengobatantindakan,
                tindak_lanjut : tindaklanjut,
                dokter
            })
            res.redirect(`/rekammedis/view/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
}