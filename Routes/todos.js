const express=require("express")
const router=express.Router();

const createTodo=require('../controllers/createTodo')
const {getAllTodos,getTodoByID}=require('../controllers/getTodo')
const updateTodo=require('../controllers/updateTodo')
// const getTodoByID=require('../controllers/getTodo')
const deleteTodo=require('../controllers/deleteTodo')
router.post("/createTodo",createTodo);
router.get("/getAllTodos",getAllTodos)
router.get("/getAllTodos/:id",getTodoByID)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)
module.exports=router;