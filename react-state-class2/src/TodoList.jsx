import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id: uuidv4(),isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo, id: uuidv4(),isDone:false}];
        });
        setNewTodo("");//after adding clear the input field
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => ({
                ...todo,
                isDone : true,
            }))
        );
    };

    let markAsDone= (id) => {
        setTodos((todos)=>
            todos.map((todos)=>{
            if(todos.id === id){
                return{
                    ...todos,
                    isDone : true,
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
                        <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>  
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button> 
                        <button onClick={()=>markAsDone(todo.id)}>Mark-As-Done</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    );
}