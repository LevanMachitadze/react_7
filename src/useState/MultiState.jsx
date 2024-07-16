import React, { useState } from 'react';

const MultiState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </>
  );
};

export default MultiState;
