const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

if (process.env.PORT) {
  port = process.env.port;
} else {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
