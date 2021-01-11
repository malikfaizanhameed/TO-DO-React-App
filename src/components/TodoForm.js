import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import IconButton from '@material-ui/core/IconButton';

function TodoForm({ addTodo }) {
    const [ todo, setTodo ] = useState('');

    const submitTodo = (e) => {
        e.preventDefault();
        addTodo({
            key: Math.floor(Math.random() * 10000),
            text: todo,
            isComplete: false
        });
        setTodo('');
    };

    return (
        
            <form>
                <FormControl fullWidth={true}>
                    <TextField 
                        value={todo}
                        label="Add TODO"
                        autoFocus={true} 
                        placeholder="What will you do today?" 
                        required={true} 
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <Button
                        onClick={submitTodo}
                        type="submit"
                        color="primary"
                        variant="contained"
                        style={{ marginTop: 5 }}
                    >Add To-Do</Button>
                </FormControl>
            </form>
        
    )
};

export default TodoForm;
