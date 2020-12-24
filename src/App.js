import './App.css';
import todosData from './todosData';
import TodoItem from './TodoItem';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    todos: todosData
  });

  const handleChange = (newState) => {
    setState(newState);
    // console.log('From App => State', state);
  };
  
  const todoItems = state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange} />);

  // console.log("Render");
  return (
    <div>
      <h1 className="heading">To-Do App</h1>
      <button onClick={() => console.log('Add')}>Add</button>
      {todoItems}
    </div>
  );
}

export default App;