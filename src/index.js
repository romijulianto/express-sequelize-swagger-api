const express = require("express");
const userRoutes = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../src/swagger/swagger.json");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const baseUrl = "https://media-backend.up.railway.app";
  res.redirect(`${baseUrl}/api/docs`);
});

// add route for swagger document API
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/users", userRoutes);


app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Server is running on port`);
});
