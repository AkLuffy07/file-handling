import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 5000;
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
})
