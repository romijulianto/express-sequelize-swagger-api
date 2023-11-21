const express = require("express");
const userRoutes = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../src/swagger/swagger.json");

const app = express();

app.use(express.json());
require("dotenv").config();

// add route for swagger document API
app.use(
  "/express-user/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use("/express-user/users", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}.`);
});
