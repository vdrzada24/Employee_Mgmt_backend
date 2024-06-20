const Employee=require("../models/employeeModel")

exports.createEmp=async (req,res)=>{
    try{
        const data=req.body;
        console.log(data);
        const newEmp={
            fullName:data.fullName,
            age:data.age,
            DOB:data.DOB,
            salary:data.salary,
            department:data.department}
        const emp=await Employee.create(newEmp);
        return res.json({success:true,message:"Employee added successfully"})}
    catch(err){
        res.json({
            message:"Couldn't add Employee"})}}
exports.updateEmp=async (req,res)=>{
    try{
        const response=await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({
            success:true,
            message:"Employee Details successfully updated"})}
    catch(err){
        console.log(err);
        return res.status(404).json({
            success:false,
            message:"Couldn't update"})}}
exports.deleteEmp=async(req,res)=>{
    try{   const response=await Employee.findByIdAndDelete(req.params.id);
        if(!response){
            return res.status(404).json({
                message:"Employee not found" })}
        res.json({
            success:true, 
            message:"Employee successfully deleted"  }) }
    catch(err){
        console.log(err);
        return res.json({
            success:false,
            message:"Error in deleting Employee"})}}
exports.getEmp=async (req,res)=>{
    try{
        const emp=await Employee.find({});
        return res.json({
            message:"Employee successfully fetched",
            emp:emp}) }
    catch(err){
        console.log(err);
        return res.json({
            success:false,
            message:"Couldn't fetch Employee"})}}
exports.getPEmp=async (req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id);
        console.log(employee);
        return res.json({
            success:true,
            message:"Employee successfully fetched",
            employee:employee })}
    catch(err){
        console.log(err);
        return res.json({
            success:false,
            message:"Couldn't fetch Employee from the database"})}}
exports.filter = async (req, res) => {
    try {
        const { age, department } = req.query; 
        let emp = await Employee.find({});
        if (age) {
            emp = emp.filter(e => e.age == age);
        }
        if (department) {
            emp = emp.filter(e => e.department == department);
        }
        return res.json({message: "Employee successfully fetched",
            emp: emp
        })
    } catch (err) {
        return res.json({ message: "Couldn't fetch Employee" })}};
    