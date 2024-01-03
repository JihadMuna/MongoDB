import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const CONNECTION_URI =
  "mongodb+srv://jojomuna2019:n195cdMP9qh5tguW@bootcampj10.zirq2po.mongodb.net/test?retryWrites=true&w=majority"; // Fixed the syntax error here

mongoose.connect(CONNECTION_URI).then(() => {
  app.listen(6000, () => {
    console.log("Listening on port 6000");
  });
});

app.use("/api", productRoutes);
