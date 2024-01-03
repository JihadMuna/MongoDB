import "dotenv/config";
import express from "express";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import songRoutes from "./routes/songRoutes.js";
import cors from "cors";
const app = express();
import "dotenv/config";

// cors middleware
app.use(cors());

//Middleware for JSON parsing
app.use(express.json());

// Song Routes
app.use("/api/v1/songs", songRoutes);

// Error handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
