import React, { useState } from 'react';

const UpdateBase = () => {
  // აარსებული ცვლადის მნიშვნელობა როცა გვინდა გამოვიყენოთ ახალი ცვლადის მნიშვნელობის შესაქმნელად

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prev) => prev + 2)}>
          add one more
        </button>
      </div>
    </>
  );
};

export default UpdateBase;
