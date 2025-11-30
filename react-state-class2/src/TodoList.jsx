import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos([...todos,{task:newTodo, id: uuidv4()}]);
        setNewTodo("");//after adding clear the input field
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

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
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}