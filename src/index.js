const express = require("express");
const userRoutes = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../src/swagger/swagger.json");

const app = express();

app.use(express.json());

// add route for swagger document API
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
