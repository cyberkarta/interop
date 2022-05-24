const mongoose = require('mongoose')
let rumahSakitSchema = mongoose.Schema({
    jenis : {
        type: String,
        require: true
    },
    nama : {
        type: String,
        require: true
    },
    alamat : {
        type: String,
        require: true
    },
    kelurahan : {
        type: String,
        require: true
    },
    kecamatan : {
        type: String,
        require: true
    },
    kabupaten : {
        type: String,
        require: true
    },
    provinsi : {
        type: String,
        require: true
    }
}, { timestamps: true })
module.exports = mongoose.model('RumahSakit', rumahSakitSchema)