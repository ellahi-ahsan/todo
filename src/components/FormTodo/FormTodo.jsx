import { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const handleTodoChange = event => setValue(event.target.value);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type='text' className='input' value={value} onChange={handleTodoChange} placeholder='Add new todo' />
      </Form.Group>
      <Button variant='primary my-3' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default FormTodo;
