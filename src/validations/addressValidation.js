import joi from "joi"
//import validate from "./userValidation"

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const addressSchema=joi.object({
    Province : joi.string()
            .min(4)
            .max(30)
            .required()
            .label("Province"),
    District : joi.string()
            .min(4)
            .max(30)
            .required()
            .label("District"),
    Cell : joi.string()
            .min(4)
            .max(30)
            .label("Cell"),
    Street: joi.string()
            
            .min(4)
            .max(30)
            .label("Street"),

    userId : joi.number()
            .integer()
            .label("userID"),
})
const validateAddress=validator(addressSchema)

export default validateAddress