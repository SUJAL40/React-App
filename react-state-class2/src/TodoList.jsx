import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo, id: uuidv4()}];
        });
        setNewTodo("");//after adding clear the input field
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id != id));
    };

    let uppercaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase()
            }))
        );
    };

    let UpperCaseOne= (id) => {
        setTodos((todos)=>
            todos.map((todos)=>{
            if(todos.id === id){
                return{
                    ...todos,
                    task: todos.task.toUpperCase(),
                };
            }else{
                return todos;
            }
        })
    );
    };

    return (
        <div>
            <input 
            placeholder="add a task" 
            value={newTodo}
            onChange={updateTodoValue}
            ></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>  
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button> 
                        <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase One </button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={uppercaseAll}>Uppercase All Tasks</button>
        </div>
    );
}