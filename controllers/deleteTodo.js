const Todo=require('../models/Todo')

const deleteTodo=async (req,res)=>{
    try{
        const id=req.params.id
        const repnse=await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            data:repnse,
            message:"delete successfully"
        })

    }
    catch(err){
        res.status(200).json({
            success:false,
            message:err.message
        })
    }
}

module.exports=deleteTodo