import { useRef } from 'react';

const FocusInput = () => {
  const inputElementRef = useRef(null);

  const focusOnInput = () => {
    if (inputElementRef.current) {
      inputElementRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type='text'
        ref={inputElementRef}
        placeholder='Click the button for focus'
      />
      <button onClick={focusOnInput}>Focus on Input</button>
    </div>
  );
};
export default FocusInput;
