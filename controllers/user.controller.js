import fs from 'fs';
import s3 from '../utils/s3Config.js';

const registerUser = async (req, res) => {
    try {        
        const { name, email, password } = req.body;
        const file = req.files?.image[0];
        console.log("RegisterUser :: file:: ", file, "\nBODY :: ", req.body);

        if (!name || !email || !password || !file) {
            return res.status(400).json({ message: "All fields are required" });
        }

        

        // const fileContent = fs.readFileSync(file.path);
        // const fileKey = `${Date.now()}-${file.filename}`;

        // const params = {
        //     Bucket: process.env.AWS_BUCKET_NAME,
        //     Key: fileKey,
        //     Body: fileContent,
        //     Metadata: {
        //         username: name || "Akhil"
        //     }
        // };

        // const s3Response = await s3.send(new PutObjectCommand(params));
        // console.log("s3Response :: ", s3Response);

        // fs.unlinkSync(file.path);

        // return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.log("RegisterUser :: Error :: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export { registerUser };