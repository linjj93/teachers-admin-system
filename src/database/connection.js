const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "teacher_students_admin",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql"
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to database:", err);
  });

module.exports = sequelize;
