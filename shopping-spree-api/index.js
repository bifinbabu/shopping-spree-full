const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

app.use(express.json());
 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

if (process.env.PORT) {
  port = process.env.port;
} else {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
