import express from "express";
import connection from "./models/index.js";
import bookRoute from "./routes/bookRoute.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/",(req,res) => {
    res.send("Backend is working");
});

app.use("/books",bookRoute);

app.listen(process.env.PORT, async()=>{
    console.log("Server has started at port 8000");
    try{
        await connection.authenticate();
        connection.sync();
        console.log("Good to go cheif , successfully authentiated");

    }catch(err){
        console.error("Error",err);
    }
});