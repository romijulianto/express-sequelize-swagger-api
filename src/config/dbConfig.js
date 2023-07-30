const Sequelize = require("sequelize");

const sequelize = new Sequelize("railway", "root", "BucmDQmkgfVTpsfZ01L2", {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: "mysql",
});

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((error) => {
        console.error("Failed to synchronize database:", error);
    });

module.exports = sequelize;
