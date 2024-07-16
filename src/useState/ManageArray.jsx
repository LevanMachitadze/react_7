import React, { useState } from 'react';

const ManageArray = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };
  return (
    <>
      <div>
        <h1>ManageArray</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button onClick={addItem}>Add Number</button>
      </div>
    </>
  );
};

export default ManageArray;
