import React, { useState } from 'react';

const ToggleBoolean = () => {
  const [isOn, setIsON] = useState(false);
  console.log(isOn);
  return (
    <>
      <div>
        <h1>{isOn ? 'on' : 'off'}</h1>
        <button onClick={() => setIsON((prev) => !prev)}>Toggle</button>
      </div>
    </>
  );
};

export default ToggleBoolean;
