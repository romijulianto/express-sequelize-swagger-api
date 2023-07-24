const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "project_express-sequelize-swagger-api",
  "root",
  "root",
  {
    host: "127.0.0.1",
    port: 8889,
    dialect: "mysql",
  }
);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Failed to synchronize database:", error);
    });

module.exports = sequelize;
