import express from "express"
import getUsers from "../controllers/getUser"
import loginUser from "../controllers/login"
import UserSignUp from "../controllers/signUp"
import ValidateUser from "../middlewares/ValidateUser"

const UserRoute= express.Router()

UserRoute.get('/users', getUsers)

UserRoute.post('/signup',ValidateUser,UserSignUp)

UserRoute.post('/login',loginUser)

export default UserRoute