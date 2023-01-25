const {User, Address} = require("../../database/models/index");


const deleteAddress = async (req, res)=>{
    try {
        await Address.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(204).send("Address deleted")
    } catch (error) {
        
    }
}

export default deleteAddress