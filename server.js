import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import router from "./router.js";


dotenv.config();
  const app =express();

  app.use(cors());

  app.use(express.static("./dist"));

  app.use("/api",router);

  app.get("/*",(req,res) =>{
    return res.sendFile(path.resolve("./dist/index.html"));
  }
  )

  app.listen(process.env.PORT,error =>{
   if(error) {

    return console.log(error);
   }
   console.log("server started");
  } )