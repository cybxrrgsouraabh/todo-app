import { useState } from 'react'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'

 function  App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3001/todos")
    .then(async (response)=>{
      const todoData = await response.json();
      setTodos(todoData.todos);
    })
  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos> 
    </div>
    
  )
}

export default App
