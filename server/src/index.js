import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      app.on("error", (error) => {
        console.log("error", error);
        throw error;
      });
      console.log(`This server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed !!! ", error);
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
