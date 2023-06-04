const mongoose=require('mongoose');
require('dotenv').config();
const DbConnectFn=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("sucesss onnection")
    }).catch((error)=>{
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        // process.exit(1);
    })
}
module.exports=DbConnectFn