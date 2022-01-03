import { useState } from 'react';

import { Card } from 'react-bootstrap';

import Todo from '../Todo/Todo';
import FormTodo from '../FormTodo/FormTodo';
import { removeItem } from '../../helpers/removeItem';

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: 'This is a sampe todo',
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    setTodos(removeItem(todos, index));
  };

  return (
    <div className='container'>
      <h1 className='text-center mb-4'>Todo List</h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Card key={index}>
            <Card.Body>
              <Todo
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Todos;
