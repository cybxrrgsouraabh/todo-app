const express = require('express');
const app = express();
const port = 3000;
const {createTodo, updateTodo } = require('./types');
const {todo} = require("./db/index");

app.use(express.json());

// 
app.post("/addTodo", async(req, res)=>{
    const todoData = req.body;
    const validation = createTodo.safeParse(todoData);
    try{

        if(!validation.success){
            return res.status(411).json({
                msg: "invalid inputs"
            });
        }
        
        await todo.create({
            title: todoData.title,
            description: todoData.description,
            completed: false
    
        })
    
        res.json({
            msg: "todo created"
        })
    
    }catch(e){
        res.status(500).json({
            msg: "an error occured"
        })
    }
    
});

app.get("/todos", async(req, res)=>{
    const todos = await todo.find({});
    res.json({todos});

})
app.put("/done", async(req,res)=>{
    const todoId = req.body;
    const validation = updateTodo.safeParse(todoId)

    try{

        if(!validation.success){
            return res.status(411).json({
                msg: "invalid inputs"
            });
        }
        // update data in mongo
        
        await todo.updateOne({_id: req.body.id},{completed: true});

        res.json({
            msg: "todo updated"
        });

    }
    catch(e){
        res.status(500).json({
            msg: "an error occured"
        })
    }
    
})

app.listen(port,()=>{
    console.log(`your server is running on localhost:${port}`);
})