import { useState } from 'react';

export default function TodoList() {
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos([...todos,newTodo]);
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
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}