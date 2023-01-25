const {User, Address} = require("../../database/models/index");

const getSingleAddress = async (req,res)=>{
    console.log(req.user.dataValues.id)
    try {
        const SingleAddress= await Address.findOne({
            where:{
                id: req.params.id
            }
        })
       return res.status(200).send(SingleAddress)
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default getSingleAddress

