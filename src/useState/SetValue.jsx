import React, { useState } from 'react';

const SetValue = () => {
  //როცა პირდაპირ ვცვლით ცვლადის მნიშვნელობას, ვანახლებთ ახალი მნიშვნელობით, ისე რომ ძველი ვერსია არ გვჭირდებ

  const [myName, setMyName] = useState('Giorgi');

  const HandleNameChange = () => {
    setMyName('ani');
  };

  return (
    <>
      <div>
        <h1>{myName}</h1>
        <button onClick={HandleNameChange}></button>
      </div>
    </>
  );
};

export default SetValue;
