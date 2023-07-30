const Sequelize = require("sequelize");

const sequelize = new Sequelize("railway", "root", "BucmDQmkgfVTpsfZ01L2", {
  host: "containers-us-west-162.railway.app",
  port: 6308,
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
