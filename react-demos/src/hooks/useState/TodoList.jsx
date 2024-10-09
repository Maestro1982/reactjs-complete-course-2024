import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a todo'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Add New Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
