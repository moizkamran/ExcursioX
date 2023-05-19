import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import propertyRoute from "./routes/property.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const port = process.env.PORT || "8080";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};


const allowedOrigins = ["http://localhost:5173", "https://bookingsouq.me", "http://127.0.0.1:5173", "101.53.233.193"];

app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/property", propertyRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(port, () => {
  connect();
  console.log("Backend server is running!");
});