const mongoose = require('mongoose')
let rekamMedisSchema = mongoose.Schema({
    rm_id : {
        type: String
    },
    rumah_sakit : {
        type: String
    },
    pasien : {
        nik : String,
        nama : String,
        jenis_kelamin : String,
        alamat : {
            alamat : String,
            kelurahan : String,
            kecamatan : String,
            kabupaten : String,
            provinsi : String
        }
    },
    kontak : {
        nama : String,
        hubungan : String,
        no_hp : String,
        alamat : {
            alamat : String,
            kelurahan : String,
            kecamatan : String,
            kabupaten : String,
            provinsi : String
        }
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