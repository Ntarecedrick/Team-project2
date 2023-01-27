import joi from "joi"


const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const userSchema=joi.object({
        name: joi.string()
            .min(3)
            .max(30)
            .label("name"),

        password: joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
            .label("password")
            .required(),

        email:joi.string()
            .required()
            .label("email")
            .email(),
            
})
const validateUser=validator(userSchema)
export default validateUser