
import sequelize from "../config/config"
const {User, Address} = require("../../database/models/index")

const getUsers = async (req, res)=>{
try {
   const users = await User.findAll()
   return res.status(200).send(users)
} catch (error) {
    return res.status(400).send(error)
}
}

export default getUsers