const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "railway",
  "root",
  "gA1e-eGfBcHfFEd113DGaEACce61-a5D",
  {
    host: "monorail.proxy.rlwy.net",
    port: 45908,
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
