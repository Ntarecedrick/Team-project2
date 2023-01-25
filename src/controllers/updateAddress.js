const { User, Address } = require("../../database/models/index");
import dotenv from "dotenv"
import Jwt from "jsonwebtoken"
dotenv.config()
const updateAddress = async (req, res) => {
  try {
    const ID= Jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET).user.id

    if(ID == req.params.id){
      await Address.update(
        {
          Province: req.body.Province,
          District: req.body.District,
          Cell: req.body.Cell,
          Street: req.body.Street,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).send("Address updated")
    }else{
      return res.status(401).send('Unauthorized')
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default updateAddress