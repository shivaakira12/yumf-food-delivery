import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import "dotenv/config";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
// const port = 4000;
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api end point
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
