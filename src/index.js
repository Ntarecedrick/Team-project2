const sequelize = require("./config/config");
import express from "express";
import Route from "./routes/routes";
import UserRoute from "./routes/UserRoutes";


import passport from "passport"
import session from 'express-session'
import routes from './routes'
import './config/passport'
import {} from "dotenv"
const app = express();
app.use(express.json())
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


try {
   app.use('/api',routes)
  app.use("/", Route);
  app.use("/", UserRoute)
  app.listen(5000, () => console.log("port server running"));

  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.log(error);
}




