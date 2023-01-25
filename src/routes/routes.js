import  express  from "express";
import deleteAddress from "../controllers/deleteAddress";
import getAddress from "../controllers/getAddress";
import getSingleAddress from "../controllers/getSingleAddress";
import postAdrress from "../controllers/PostAddress";
import updateAddress from "../controllers/updateAddress";
import verifyPass from "../middlewares/passportVerify";
import passport from "passport"
verifyPass()


const Route= express.Router();

Route.get('/Address',passport.authenticate('jwt', {session:false}),getAddress)
Route.get('/Address/:id',passport.authenticate('jwt', {session:false}), getSingleAddress)
Route.post('/Address',passport.authenticate('jwt', {session:false}),postAdrress )
Route.delete('/Address/:id', deleteAddress)
Route.patch('/Address/:id',passport.authenticate('jwt', {session:false}), updateAddress)


export default Route