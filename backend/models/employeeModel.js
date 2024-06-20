const mongoose=require('mongoose');

const employeeSchema=mongoose.Schema(
    {
        fullName:{
            type: String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        DOB:{
            type:String,
            required:true,
        },
        salary:{
            type:Number,
            required:true
        },
        department:{
            type:String,
            required:true
        }

    },
    {
        timestamps:true,
    }

);

// export const 
module.exports = mongoose.model("Employee", employeeSchema);