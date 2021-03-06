import React from 'react';
import Todo from './Todo'
const TodoList = ({inputText, todos, setTodos}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} inputText={inputText} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;