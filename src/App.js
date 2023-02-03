import CreateAccount from "./components/CreateAccount";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';


function App() {
  return (
    <div>
      <CreateAccount/>
    </div>
  );
  // const [value, setValue] = useState(null);
  //   const cities = [
  //       { name: 'New York', code: 'NY' },
  //       { name: 'Rome', code: 'RM' },
  //       { name: 'London', code: 'LDN' },
  //       { name: 'Istanbul', code: 'IST' },
  //       { name: 'Paris', code: 'PRS' }
  //   ];

  //   return (
  //       <div className="card flex justify-content-center">
  //           <span className="p-float-label">
  //               <Dropdown inputId="dropdown" value={value} options={cities} onChange={(e) => setValue(e.value)} optionLabel="name" />
  //               <label htmlFor="dropdown">Dropdown</label>
  //           </span>
  //       </div>
  //   )
}

export default App;
