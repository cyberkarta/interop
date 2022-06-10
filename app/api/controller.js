const RekamMedis = require('../../models/RekamMedis')
module.exports = {
    createRekamMedis: async(req,res)=>{
        try {
            const {
                rm_id,
                rumah_sakit,
                nik,
                nama,
                jenis_kelamin,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi,
                kontakNama, 
                hubungan, 
                kontakAlamat, 
                kontakKelurahan,
                kontakKecamatan, 
                kontakKabupaten, 
                kontakProvinsi, 
                kontakNoHp,
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
            let rekammedis = await RekamMedis({
                rm_id,
                rumah_sakit,
                pasien : {
                    nik : nik,
                    nama : nama,
                    jenis_kelamin : jenis_kelamin,
                    alamat : {
                        alamat : alamat,
                        kelurahan : kelurahan,
                        kecamatan : kecamatan,
                        kabupaten : kabupaten,
                        provinsi : provinsi
                    }
                },
                kontak : kontakPasien,
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
            res.status(200).json({message : "data terkirim"})
        } catch (error) {
            res.status(500).json({message: error.message || `Internal Server Error`})
        }
    },
    rekammedis : async(req,res)=>{
        try {
            const rekammedis = await RekamMedis.find()
            res.status(200).json({data : rekammedis})
        } catch (error) {
            res.status(500).json({message: error.message || `Internal Server Error`})
        }
    },
    viewSingle : async(req,res)=>{
        try {
            const {id} = req.params
            const rekammedis = await RekamMedis.findOne({_id : id})
            res.status(200).json({data : rekammedis})
        } catch (error) {
            res.status(500).json({message: error.message || `Internal Server Error`})
        }
    }
}