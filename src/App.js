import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
import useFetch from './useFetch.js';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const [loading, setLoading] = useState(false);
  
    const fetchInitialData = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:3001/data.json');
      const initialData = await response.json();
      await new Promise(resolve => setTimeout(()=>resolve(), 1000));
      //할일을 추가하고
      setTodos(initialData);
      //loading이 완료된 것을 표시
      setLoading(false);
    }
  
    useEffect ( () => {
      fetchInitialData();
    }, []) //[]빈배열로 초기에만 데이터를 가져오도록 한다.


  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {'title': newTodo, 'id' : todos.length, 'status' : 'todo'}]);
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

    <List todos={todos} loading={loading} />
    </>
  )
}

export default App;
