const express= require('express')
const router=express.Router();
const {createEmp,updateEmp,filter,getEmp,getPEmp,deleteEmp}=require("../controllers/employee")
router.post("/addEmp",createEmp);
router.put("/updateEmp/:id",updateEmp);
router.delete("/deleteEmp/:id",deleteEmp);
router.get("/fetchEmps",getEmp);
router.get("/fetchPEmp/:id",getPEmp)
router.get("/filterEmp",filter)
module.exports=router;