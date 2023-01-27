import express from "express";

const router = express.Router()

import googleAuth from './googleAuthRouter'



router.use('/',googleAuth)


module.exports=router