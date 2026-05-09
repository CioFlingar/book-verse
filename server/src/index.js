import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
   res.send("hello")
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

/*
import express from "express"
const app = express()

;(async ()=>{
    try {
    await mongoose.connect(`${process.env.MONGO_URI}/${bookverse}`)
    app.on("error", (error)=>{
        console.log("error: ", error);
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`This server is running on ${process.env.PORT}`)
    })

} catch (error) {
    console.error("error: ", error)
    throw error
}
})()
*/
