import { Router } from "express";
 const router= Router()

 router.route("/register").post((req, res) => {
    return res.status(400).json("Registration failed from server");
 });

 router.route("/get-data").get((req,res) => {
  setTimeout(() =>{
   return res.status(200).json({
      msg: "Request successfull!"
   })
  }, 2000);
})

 
 
 
 

 export default router;