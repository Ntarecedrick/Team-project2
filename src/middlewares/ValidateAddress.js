import validateAddress from "../validations/addressValidation"

const ValidateAddress=(req,res,next)=>{
    const {error}=validateAddress(req.body)
        if(error){
            return res.status(400).send(error.details.map(detail=> detail.message))
        }
        else{
            next()
        }
    
}
export default ValidateAddress;