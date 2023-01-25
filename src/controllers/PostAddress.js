const {User, Address} = require("../../database/models/index");

const postAdrress = async (req,res)=>{
 try {
   // console.log(req.user)
    const address = await Address.create({
        Province: req.body.Province,
        District: req.body.District,
        Cell: req.body.Cell,
        Street: req.body.Street,
        userId: req.user.id
    });
    await address.save()
    return res.status(200).send(address)
 } catch (error) {
    return res.status(400).send(error)
 }
}

export default postAdrress