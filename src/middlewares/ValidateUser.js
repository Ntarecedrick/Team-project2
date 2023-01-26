import validateUser from "../validations/userValidation"

const ValidateUser=(req,res,next)=>{
    const {error}=validateUser(req.body)
        if(error){
            return res.status(400).send(error.details.map(detail=> detail.message))
        }
        else{
            next()
        }
    
}
export default ValidateUser;