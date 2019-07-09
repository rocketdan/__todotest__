import React from 'react'

const List = ({todos, loading}) => {

  let todoList = <div>기둘...</div>;
  if(!loading) todoList = todos.map( (todo) => <li key={todo.id}>{todo.title}</li>)

  return (
    <ul>
        {todoList}
    </ul>
  )
}
export default List