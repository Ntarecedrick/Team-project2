const {User, Address} = require("../../database/models/index");
import  Jwt  from "jsonwebtoken";
const postAdrress = async (req,res)=>{
 try {
   Jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET)
   console.log(req.user)
   const addressFound= await Address.findOne({
      where:{
          userId: Jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET).user.id
      }
  })
  if(addressFound) return res.status(202).json({"error":'address already unserted try update'});

    const address = await Address.create({
        Province: req.body.Province,
        District: req.body.District,
        Cell: req.body.Cell,
        Street: req.body.Street,
        userId: Jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET).user.id
    });
    await address.save()
    return res.status(200).send(address)
 } catch (error) {
    return res.status(400).send(error)
 }
}

export default postAdrress