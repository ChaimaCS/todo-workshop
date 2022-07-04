import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

const ListTask = () => {
  const todos = useSelector(state => state.todos);
  const filteredTodos = useSelector (state => state.filteredTodos)
  console.log(todos);
  if (filteredTodos.length >0 ) { 
    return (
    <ul className="list-group mt-3">
      {filteredTodos.map(todo => (
        <Task todo={todo} key={todo.id} />
      ))}
    </ul>
  );}
  return (
    <ul className="list-group mt-3">
      {todos.map(todo => (
        <Task todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default ListTask;
