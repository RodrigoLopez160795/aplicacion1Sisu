import CreateAccount from "./components/CreateAccount";
import React, { useState } from "react";
import { Fieldset } from "primereact/fieldset";

const legendTemplate = (
  <div>
    <span className="pi pi-user mr-2"></span>
    <span className="font-bold text-lg">Crea tu cuenta</span>
  </div>
);

function App() {
  return (
    <div className="m-auto w-8 mt-6">
      <Fieldset legend={legendTemplate}>
        <CreateAccount />
      </Fieldset>
    </div>
  );
}

export default App;
