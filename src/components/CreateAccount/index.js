import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Password } from 'primereact/password';
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useEffect, useRef, useState } from "react";
import { cities, countries, states } from "./utils";

function CreateAccount() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const toast = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    toast.current.show({
      severity: "success",
      summary: "Enviado",
      detail: "Usuario regristrado",
    });
  }

  useEffect(() => {
    if ((age < 18 || age > 99) && age != null) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "La edad debe ser entre 18 y 99",
        life: 3000,
      });
      setAge(null);
    }
    if (
      !/^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(
        name.replace(/\s+/g, "")
      ) &&
      name != ""
    ) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail:
          "El nombre solo puede contener letras y debe tener máximo 50 caracteres",
        life: 3000,
      });
      setName("");
    }
  }, [age, name]);

  useEffect(() => {
    if (setCity && password) setDisable(false);
  }, [city]);

  return (
    <form className="flex flex-column gap-5 m-2" onSubmit={handleSubmit}>
      <Toast ref={toast} />
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <span className="p-float-label">
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Nombre completo</label>
        </span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-calendar"></i>
        </span>
        <span className="p-float-label">
          <InputNumber
            value={age}
            onValueChange={(e) => setAge(e.value)}
            id="age"
          />
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
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-map"></i>
        </span>
        <span className="p-float-label">
          <Password
            inputId="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <label htmlFor="password">Contraseña</label>
        </span>
      </div>
      <Button
        type="submit"
        label="Submit"
        icon="pi pi-check"
        className="flex m-auto p-button-rounded"
        disabled={disable}
      />
    </form>
  );
}

export default CreateAccount;
