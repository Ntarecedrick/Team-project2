import JWT from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from 'dotenv'
import {User} from "../../database/models/index"


dotenv.config();

const loginUser= async (req, res)=>{
    try {
        const user= await User.findOne({
            where:{
                email: req.body.email
            }
        })
        if(!user) return res.status(400).send('invalid email or Password');

        const validPassword= await bcrypt.compare(req.body.password, user.password)

        if(!validPassword) return res.status(400).send('invalid email or Password');

        const token = JWT.sign({user:user,}, process.env.TOKEN_SECRET);

        const UserObject = {
            Name: user.name,
            email: user.email,
            userToken: token
        }
        return res.header('Authorization', token).send(UserObject)
    } catch (error) {
        return res.status(400).send("unable to connect")
    }
}

export default loginUser