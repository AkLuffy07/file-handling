import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(
    upload.fields([
        {
            name: "image",
            maxCount: 1
        }
    ]),
    registerUser
);

export default router;
