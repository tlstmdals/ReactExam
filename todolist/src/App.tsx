import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';
import MyWeather from './MyWeather';
function App() {

  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList></TodoList>
        <Clock></Clock>
        <MyWeather weather='흐림'>일기예보</MyWeather>
      </header>
    </div>
  );
}

export default App;
