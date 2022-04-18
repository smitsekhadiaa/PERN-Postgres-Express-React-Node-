const express = require("express");
const app = express();
const cors = require("cors");
const pool=require("./db");  //by using pool we will be able to run queries for the database that we have connected

// middleware
app.use(cors());
app.use(express.json());  //req.body


// ROUTES

// create a todo

app.post("/todos", async(req,res)=>{  //post as we are adding data 
    try{

        // console.log(req.body);  //req.body containss the request comming from postman from the json file(from the local host url)
        const {description} = req.body;
        const newTodo=await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
            );
        // console.log(newTodo.rows[0]);
        res.json(newTodo.rows[0]);  //sending the response to the request we received
        
    }
    catch(err){
        console.error(err.message);
    }
})



// GET ALL TODOS
app.get("/todos",async(req,res)=>{
    try{
        const gettodos=await pool.query("SELECT * FROM todo");
        // console.log(gettodos);
        res.json(gettodos.rows);
    }
    catch(err){
        console.error(err.message);
    }
})

// GET ONE TODO
app.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


  
// UPDATE A TODO

app.put("/todos/:id", async(req,res)=>{
    try{
        const {id}=req.params;
        const {description}=req.body;
        const updatetodo=await pool.query("UPDATE todo SET description =($1) WHERE todo_id=($2)" , [description,id]);
        res.json("todo was updated");
    }
    catch(err)
    {
        console.error(err.message);
    }
})



// DELETE A TODO
app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id
      ]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

