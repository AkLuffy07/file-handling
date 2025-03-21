import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/users", userRoutes);

export { app };