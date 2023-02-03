import CreateAccount from "./components/CreateAccount";
import React, { useState } from "react";
import { Fieldset } from 'primereact/fieldset';


function App() {
  return (
    <div className="w-screen h-screen flex justify-content-center align-items-center">
      <CreateAccount/>
    </div>
  );
}

export default App;
