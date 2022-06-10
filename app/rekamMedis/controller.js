const RekamMedis = require('../../models/RekamMedis')
module.exports = {
    index: async(req,res)=>{
        try {
            const rekammedis = await RekamMedis.find()
            res.render('rekammedis/view',{
                title:'Rekam Medis',
                rekammedis
            })
        } catch (error) {
            console.log(error)
        }
    },
    viewSingle : async(req,res)=>{
        try {
            const {id} = req.params
            const rekammedis = await RekamMedis.findOne({_id : id})
            res.render('rekammedis/single',{
                title:'Rekam Medis Pasien', 
                rekammedis
            })
        } catch (error) {
            console.log(error)
        }
    }
}