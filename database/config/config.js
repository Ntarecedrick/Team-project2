require('dotenv').config()

module.exports = {
  development: {
    url: "postgres://postgres:andela123@127.0.0.1:3000/projectDb",
    dialect: 'postgres',
  }
  // test: {
  //   url: process.env.TEST_DATABASE_URL,
  //   dialect: 'postgres',
  // },
  // production: {
  //   url: process.env.DATABASE_URL,
  //   dialect: 'postgres',
  // },
}