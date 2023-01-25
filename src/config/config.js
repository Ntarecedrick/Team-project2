import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config

const sequelize = new Sequelize(process.env.POSTGREDB,process.env.POSTGRENAME, process.env.POSTGREPASSWORD, {
    host: 'localhost',
    dialect:  'postgres',
})


module.exports= sequelize