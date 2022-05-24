module.exports = {
    index: async(req,res)=>{
        try {
            res.render('index',{
                title:'Interop'
            })
        } catch (error) {
            console.log(error)
        }
    }
}