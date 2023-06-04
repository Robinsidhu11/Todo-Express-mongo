const Todo=require('../models/Todo')

const updateTodo=async (req,res)=>{
    try{
        const id=req.params.id;
        const {title,description}=req.body
        const data=await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()})
        res.status(200).json({
            success:true,
            data:data,
            message:"updation successfull congrats"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:"error",
            message:err.message
        })
    }
}

module.exports=updateTodo;