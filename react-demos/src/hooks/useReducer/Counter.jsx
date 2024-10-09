import { useReducer, useState } from 'react';

import { initialState, reducer } from './CounterReducer';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const incrementByAmount = () =>
    dispatch({ type: 'incrementByAmount', payload: Number(inputValue) });
  const decrementByAmount = () =>
    dispatch({ type: 'decrementByAmount', payload: Number(inputValue) });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

      <div>
        <input
          type='number'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={incrementByAmount}>Add</button>
        <button onClick={decrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};
export default Counter;
