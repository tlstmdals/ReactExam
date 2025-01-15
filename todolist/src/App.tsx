import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';
function App() {

  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList></TodoList>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
