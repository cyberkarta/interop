const mongoose = require('mongoose')
let pasienSchema = mongoose.Schema({
    nik : {
        type: String,
        require: true,
        unique: true
    },
    nama : {
        type: String,
        require: true
    },
    alamat : {
        alamat : String,
        kelurahan : String,
        kecamatan : String,
        kabupaten : String,
        provinsi : String
    },
    no_hp : {
        type: String,
        require: true
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
}, { timestamps: true })
module.exports = mongoose.model('Pasien', pasienSchema)