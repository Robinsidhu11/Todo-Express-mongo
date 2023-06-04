const Todo=require('../models/Todo');

const CreateTodo=async (req,res)=>{
    try{
        const {title,description}=req.body;

        const response=await Todo.create({title,description});
        res.status(200).json({
                success:true,
                data:response,
                message:"Entry created in db"
        })
    }
    catch(err){
        console.log("error internal")
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }
    
}
module.exports=CreateTodo