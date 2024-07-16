import { useState } from 'react';
import viteLogo from '/vite.svg';
import SetValue from './useState/SetValue';
import UpdateBase from './useState/UpdateBase';
import MultiState from './useState/MultiState';
import ToggleBoolean from './useState/ToggleBoolean';
import ManageObject from './useState/ManageObject';
import ManageArray from './useState/ManageArray';

function App() {
  return (
    <>
      {/* <SetValue /> */}
      {/* <UpdateBase /> */}
      {/* <MultiState /> */}
      {/* <ToggleBoolean /> */}
      {/* <ManageObject /> */}
      <ManageArray />
    </>
  );
}

export default App;
