import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'
import mongoose from 'mongoose';
import registerRoute from './Routes/Auth.js'
import loginRoute from './Routes/Auth.js'
import userRoute from "./Routes/User.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT  || 3005;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB Connected")
})

app.use(cors())
app.use(express.json())

app.use("/auth", registerRoute)
app.use("/auth", loginRoute)
app.use("/", userRoute)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))