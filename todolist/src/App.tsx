import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = '리액트';

  return (
    <div className="App">
      <header className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='test'>Hello, {
        name === '리액트' ? (<h1>YES</h1>) : (<h1>NO</h1>)
        }!!</h1>
        <p>반갑습니다.</p>
        {/* 주석은 이렇게 작성합니다. */}
        {/* 
        작성자 : 신
        작성일 : 2025.1.6
        내용 : 기능 요약*/}
      </header>
    </div>
  );
}

export default App;
