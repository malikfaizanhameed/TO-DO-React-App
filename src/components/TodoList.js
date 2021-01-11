import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        setTodos([todo, ...todos]);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.key !== id);
        setTodos(newTodos);
    };

    const editTodo = (id, newValue) => {
        const newTodo = { key: id, text: newValue, isComplete: false};
        setTodos(prevTodos => prevTodos.map(todo => (todo.key === id ? newTodo : todo)));
        
    };

    const completeTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.key === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <Container maxWidth="sm">
            <TodoForm addTodo={addTodo}/>
            <Todo 
                todos={todos} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                completeTodo={completeTodo}
            />
        </Container>
    )
};

export default TodoList;
