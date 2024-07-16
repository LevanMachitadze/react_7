import React, { useState } from 'react';

const ManageObject = () => {
  const [user, setUser] = useState({
    name: '',
    age: 10,
    email: 'sfsf@gmail.com',
    password: 'test',
  });

  const handleChange = (event) => {
    setUser({ ...user, name: event.target.value });
  };
  const ageChange = (event) => {
    setUser({ ...user, age: event.target.value });
  };
  return (
    <>
      <div>
        <h1>object</h1>
        <input onChange={handleChange} type='text' placeholder='name' />
        <p>Name: {user.name}</p>
        <input onChange={ageChange} type='number' placeholder='name' />
        <p>Age: {user.age}</p>
      </div>
    </>
  );
};

export default ManageObject;
