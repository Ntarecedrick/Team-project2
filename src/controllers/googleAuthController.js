const {User} = require('../../database/models/index')
import bcrypyt from 'bcryptjs'
import jwt from "jsonwebtoken"
const googleAuth = async (req, res) => {
    // console.log(req.user)
    try{
        
    
   await User.findOne({
        where:{
            email: req.user.email
        }
    }).then(async(result)=>{
        if(result){
            res.json({"success":true,user:{
                id:result.id,
                name:result.name,
                email:result.email,
                token:generateToken(result)
            }}) 
        }else{
            // res.json("hello")
            const salt = await bcrypyt.genSalt(10)
            const hashpassword= await bcrypyt.hash(req.user.id, salt)
            // console.log(hashpassword)
        
            const user= await User.create({
                name: req.user.displayName,
                email: req.user.email,
                password: hashpassword
            })
            await user.save()
            return res.status(200).send(user)
        }
    })
} catch (error) {
       console.log(error) 
}

  };

  const generateToken=(user)=>{
    return jwt.sign({user},"my-token-secret",{expiresIn:'30d'})
}
  export default googleAuth
