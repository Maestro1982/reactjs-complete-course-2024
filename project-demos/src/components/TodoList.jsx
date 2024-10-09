import { useState } from 'react';

import '../styles.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleTodos = () => {
    setTodos((todos) => {
      return todos.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInputValue('');
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className='container'>
      <input
        className='input'
        type='text'
        placeholder='Add a todo'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='button' onClick={handleTodos}>
        Add Todo
      </button>

      <ul className='todos-list'>
        {todos.map(({ text, id }) => (
          <li key={id} className='todo'>
            <span>{text}</span>
            <button className='close' onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
