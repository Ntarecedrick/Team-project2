const {User, Address} = require('../../database/models/index')

const getAddress= async (req, res)=>{
    try {
        const address = await Address.findAll()
        return res.status(200).send(address)
    } catch (error) {
     return res.status(400).send(error)   
    }
}

export default getAddress