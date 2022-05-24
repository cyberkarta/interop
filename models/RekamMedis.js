const mongoose = require('mongoose')
let rekamMedisSchema = mongoose.Schema({
    pasien : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pasien'
    },
    rumah_sakit : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RumahSakit'
    },
    tanggal : {
        type: Date
    },
    tanggal_keluar : {
        type: Date
    },
    diagnosis : {
        type: String
    },
    hasil_pemeriksaan_fisik : {
        type: String
    },
    hasil_pemeriksaan_penunjang : {
        type: String
    },
    diagnosis_akhir : {
        type: String
    },
    pengobatan_tindakan : {
        type: String
    },
    tindak_lanjut : {
        type: String
    },
    dokter : {
        type: String
    },
}, { timestamps: true })
module.exports = mongoose.model('RekamMedis', rekamMedisSchema)