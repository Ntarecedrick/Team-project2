const {User, Address} = require("../../database/models/index");
import dotenv from "dotenv"
import Jwt from "jsonwebtoken"
dotenv.config()

const getSingleAddress = async (req,res)=>{
    try {
    
        const ID= Jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET).user.id
        if(ID == req.params.id){
            const SingleAddress= await Address.findOne({
                where:{
                    id: req.params.id
                }
            })
           return res.status(200).send(SingleAddress)
        }else{
            return res.status(401).send(`Unauthorized`)
        }
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default getSingleAddress

