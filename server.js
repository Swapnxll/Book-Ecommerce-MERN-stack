import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoute.js";
dotenv.config();
import cors from "cors";
//connect mongo
connectDB();

//rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>WELCOME</h1>");
});

//port
const port = process.env.PORT || 8080;
const mode = process.env.DEV_MODE;
//run
app.listen(port, () => {
  console.log(`server running on ${mode} mode on ${port}`.bgYellow);
});
