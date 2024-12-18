import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";
import companyRoute from "./src/routes/company.route.js";
import jobRoute from "./src/routes/job.route.js";
import applicantionRoute from "./src/routes/application.route.js";


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
    origin:'https://indie-hub-1.onrender.com',
    credentials:true
}

app.use(cors(corsOptions));

const PORT =process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicantionRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`⚙️ Server is running at ${PORT}`);
    
})


