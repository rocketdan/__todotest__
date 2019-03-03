import React, { Component, useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState(['js공부']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect( ()=> {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos])

  return (
    <>
    <h1>todo 애플리케이션</h1>

    <form action="">
      <input type="text" name="" onChange={changeInputData}/>
      <button onClick={addTodo}>할일추가</button>
    </form>

    <List todos={todos} />
    </>
  )
}

export default App;
