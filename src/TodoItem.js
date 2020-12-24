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

    function handleCheckbox(id) {
        const updatedTodos = state.todos.map(todo => {
            // debugger;
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setState({
            todos: updatedTodos
        }
        );
        console.log('From Checkbox Func => State',state);
        props.handleChange(state);
    }

    function handleDelete(id) {
        // console.log('Need to delete ', id);
        // debugger;
        let todox = state.todos;
        todox.splice(id - 1, 1);
        todox.forEach(todo => {
            if (todo.id > id) {
                todo.id = todo.id - 1;
            }
        });
        setState({
            todos: todox
        });
        props.handleChange({
            todos: todox
        });
        // console.log(state);
        console.log('From Delete Func => State',state);
    }

    return(
        <div className = "todo-item" >
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => handleCheckbox(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null} >{props.item.text}</p>
            <span>
                <IconButton onClick={() => handleDelete(props.item.id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </span>
        </div>
    )
}

export default TodoItem;