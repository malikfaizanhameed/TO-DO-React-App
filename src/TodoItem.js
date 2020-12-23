import React, { useState } from 'react';
import './TodoItem.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import todosData from './todosData';

function TodoItem(props) {
    // console.log('todo item component');
    const [state, setState] = useState({ todos: todosData });
    // console.log(state.todos);

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    function changeState(id) {
        setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
        console.log('From TodoItem => State',state);
        props.handleChange(state);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => changeState(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null} >{props.item.text}</p>
            <span>
                <IconButton>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </span>
        </div>
    )
}

export default TodoItem;