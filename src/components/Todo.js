import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import UpdateForm from './UpdateForm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'sm',
        backgroundColor: theme.palette.background.paper,
    },
}));

function Todo({ todos, deleteTodo, editTodo, completeTodo }) {

    const [ edit ,setEdit ] = useState({
        key: null,
        text: ''
    });

    const submitUpdate = (value) => {
        editTodo(edit.key, value);
        setEdit({
            key: null,
            text: ''
        });
    };

    const classes = useStyles();

    if (edit.key) {
        return (
            <>
                <UpdateForm submitUpdate={submitUpdate}/>
            </>
        )
    }

    return (
        <List className={classes.root}>
            {todos.map((todo) => {
                const labelId = `checkbox-list-label-${todo.text}`;
                return (
                    <ListItem key={todo.key} role={undefined} dense button>
                        <ListItemText style={(todo.isComplete ? {textDecoration: 'line-through'} : null)} id={labelId} primary={todo.text} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="complete" onClick={() => completeTodo(todo.key)}>
                                <CheckCircleIcon color="primary" />
                            </IconButton>
                            <IconButton edge="end" aria-label="edit" onClick={() => setEdit({key: todo.key, text: todo.text})}>
                                <EditIcon  color="primary"/>
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.key)}>
                                <DeleteIcon color="secondary" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
};

export default Todo;
