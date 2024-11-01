import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
dotenv.config({});


const app = express();

// app.get("/home",(req,res) => {
//     return res.status(200),json({
//         message:"Hurray!!! its connected",
//         success:true
//     })
// });



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT =process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`⚙️ Server is running at ${PORT}`);
    
})


