import { Button } from 'react-bootstrap';

import './Todo.css'

export const Todo = ({ todo, index, markTodo, removeTodo }) => (
  <div className='todo'>
    <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
    <div>
      <Button variant='outline-success' onClick={() => markTodo(index)}>✓</Button>{' '}
      <Button variant='outline-danger' onClick={() => removeTodo(index)}>✕</Button>
    </div>
  </div>
);

export default Todo;

