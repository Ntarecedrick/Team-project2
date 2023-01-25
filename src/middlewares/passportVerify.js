import newjwt from "passport-jwt";
import { ExtractJwt } from "passport-jwt"
import dotenv from "dotenv";
import {User} from "../../database/models/index"
import passport from "passport";


dotenv.config()

const JwtStategy= newjwt.Strategy

async function verifyPass(req, res){
    passport.use(
        new JwtStategy(
            {
            secretOrKey: process.env.TOKEN_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (jwtpayload, done)=>{
            try {
                const user= await User.findOne({id: jwtpayload})
                return done(null,user)
            } catch (error) {
                return error
            }
        }
        )
    )

}

export default verifyPass