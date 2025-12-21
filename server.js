import express from "express";
import dotenv from "dotenv";

dotenv.config();

import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
