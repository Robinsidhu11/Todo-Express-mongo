const Todo=require('../models/Todo');

const getAllTodos=async (req,res)=>{
    try{
            const data=await Todo.find({})
            res.status(200).json({
                success:true,
                data:data,
                message:"all todos fetched"
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

const getTodoByID=async (req,res)=>{
    try{
        const id=req.params.id;
        
        const data=await  Todo.findById( {_id: id} )
        res.status(200).json({
            success:true,
            data:data,
            message:"all todos fetched"
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
module.exports={getTodoByID,getAllTodos}
