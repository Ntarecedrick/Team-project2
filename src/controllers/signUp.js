import {User} from '../../database/models/index'
import bcrypyt from "bcryptjs"


const UserSignUp = async (req, res) =>{
    try {
        const emailExist= await User.findOne({
            where:{
                email: req.body.email
            }
        })
        if(emailExist) return res.status(409).send("User already exist");
        
        const salt = await bcrypyt.genSalt(10)
        const hashpassword= await bcrypyt.hash(req.body.password, salt)
        // console.log(hashpassword)

        const user= await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashpassword
        })
        await user.save()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default UserSignUp