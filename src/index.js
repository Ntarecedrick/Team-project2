const sequelize = require("./config/config");
import express from "express";
import Route from "./routes/routes";
import UserRoute from "./routes/UserRoutes";

const app = express();
app.use(express.json())

try {
  app.use("/", Route);
  app.use("/", UserRoute)
  app.listen(5000, () => console.log("port server running"));

  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.log(error);
}
