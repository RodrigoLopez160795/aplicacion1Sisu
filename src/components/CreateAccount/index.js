import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { cities, countries, states } from "./options";

function CreateAccount() {
    const [country,setCountry]=useState(null);
    const [state,setState] = useState(null);
    const [city,setCity] = useState(null);
  return (
    <form>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <span className="p-float-label">
          <InputText id="name" />
          <label htmlFor="name">Nombre completo</label>
        </span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-calendar"></i>
        </span>
        <span className="p-float-label">
          <InputNumber />
          <label htmlFor="age">Edad</label>
        </span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-map"></i>
        </span>
        <span className="p-float-label">
          <Dropdown
            options={countries}
            inputId="countries"
            onChange={({ value }) => setCountry(value)}
            value={country}
          />
          <label htmlFor="countries">Selecciona un país</label>
        </span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-map"></i>
        </span>
        <span className="p-float-label">
          <Dropdown
            options={states}
            inputId="states"
            className={country ? "" : "p-disabled"}
            onChange={({ value }) => setState(value)}
            value={state}
          />
          <label htmlFor="states">Selecciona un estado</label>
        </span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-map"></i>
        </span>
        <span className="p-float-label">
          <Dropdown
            options={cities}
            inputId="cities"
            className={state ? "" : "p-disabled"}
            onChange={({ value }) => setCity(value)}
            value={city}
          />
          <label htmlFor="cities">Selecciona una ciudad</label>
        </span>
      </div>
    </form>
  );
}

export default CreateAccount;

// DUDA EN ESTA FORMA DE HACER LAS COSAS

// function CreateAccount() {
//     const [values, setValues] = useState({
//       countries: null,
//       states: null,
//       cities: null,
//     });
//     const options = [
//       [
//         { name: "País 1", code: "P1" },
//         { name: "País 2", code: "P2" },
//         { name: "País 3", code: "P3" },
//       ],
//       ["Estado 1", "Estado 2", "Estado 3"],
//       ["Ciudad 1", "Ciudad 2", "Ciudad 3"],
//     ];
//     function handler(e, type) {
//       switch (type) {
//         case "countries":
//           setValues({ ...values, countries: e.code });
//           break;
//         case "states":
//           setValues({ ...values, states: e.code });
//           break;
//         case "cities":
//           setValues({ ...values, cities: e.code });
//           break;
//       }
//     }
//     return (
//       <form>
//         <div className="p-inputgroup">
//           <span className="p-inputgroup-addon">
//             <i className="pi pi-user"></i>
//           </span>
//           <span className="p-float-label">
//             <InputText id="name" />
//             <label htmlFor="name">Nombre completo</label>
//           </span>
//         </div>
//         <div className="p-inputgroup">
//           <span className="p-inputgroup-addon">
//             <i className="pi pi-calendar"></i>
//           </span>
//           <span className="p-float-label">
//             <InputNumber />
//             <label htmlFor="age">Edad</label>
//           </span>
//         </div>
//         <div className="p-inputgroup">
//           <span className="p-inputgroup-addon">
//             <i className="pi pi-map"></i>
//           </span>
//           <span className="p-float-label">
//             <Dropdown
//               options={options[0]}
//               inputId="countries"
//               onChange={({ value }) => handler(value, "countries")}
//               optionLabel="name"
//               value={values.countries}
//             />
//             <label htmlFor="countries">Selecciona un país</label>
//           </span>
//         </div>
//         <div className="p-inputgroup">
//           <span className="p-inputgroup-addon">
//             <i className="pi pi-map"></i>
//           </span>
//           <span className="p-float-label">
//             <Dropdown
//               options={options[1]}
//               inputId="states"
//               className="p-disabled"
//               optionLabel="name"
//             />
//             <label htmlFor="states">Selecciona un estado</label>
//           </span>
//         </div>
//         <div className="p-inputgroup">
//           <span className="p-inputgroup-addon">
//             <i className="pi pi-map"></i>
//           </span>
//           <span className="p-float-label">
//             <Dropdown
//               options={options[2]}
//               inputId="cities"
//               className="p-disabled"
//               optionLabel="name"
//             />
//             <label htmlFor="cities">Selecciona una ciudad</label>
//           </span>
//         </div>
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             console.log(values);
//           }}
//         >
//           Check values
//         </button>
//       </form>
//     );
//   }
