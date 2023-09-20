import {Router}  from "express";
import bookModel  from "../models/bookModel.js";
const router = Router();

router.post("/add",async(req,res) => {
   const data =  await  bookModel.create(req.body);
   console.log(data);
   if(data){
      res.json(data);
   }else{
      res.json({success:false,message:"Error during adding book"})
   }

})


export default router;