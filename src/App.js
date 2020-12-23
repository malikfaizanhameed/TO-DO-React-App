import Form from './Form';
import './App.css';
import todosData from './todosData';
import TodoItem from './TodoItem';
import React, { Component, useState } from 'react';
import { SentimentSatisfied } from '@material-ui/icons';

function App() {
  const [state, setState] = useState({
    todos: todosData
  });

  const handleChange = (newState) => {
    setState(newState);
    console.log('From App => State', state);
  };
  
  const todoItems = state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={handleChange} />);

  console.log("Render");
  return (
    <div>
      <h1 className="heading">To-Do App</h1>
      {todoItems}
    </div>
  );
}

export default App;



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     console.log("Changed", id);
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id === id){
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//     console.log('handleChange state display', this.state);
//   }

//   render() {
//     console.log("render");
//     console.log('render state display', this.state);
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
//     // console.log(todoItems); 
//     return(
//       <div>
//         <h1 className="heading">To-Do App</h1>
//         {todoItems}
//       </div>
//     )
//   }
// }

