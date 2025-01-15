import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
function App() {
  let name = '리액트';

  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
