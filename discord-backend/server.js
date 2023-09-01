const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

const authRouter = require("./routes/authRouter");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("databse connection failed.  Server not started ");
  });

const server = http.createServer(app);
