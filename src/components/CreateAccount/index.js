import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";

const options = {
  countries: ["País 1", "País 2", "País 3"],
  states: ["Estado 1", "Estado 2", "Estado 3"],
  cities: ["Ciudad 1", "Ciudad 2", "Ciudad 3"],
};

function CreateAccount() {
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
          <Dropdown options={options.countries} inputId="countries" />
          <label htmlFor="countries">Selecciona un país</label>
        </span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-map"></i>
        </span>
        <span className="p-float-label">
          <Dropdown
            options={options.states}
            inputId="states"
            className="p-disabled"
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
            options={options.cities}
            inputId="cities"
            className="p-disabled"
          />
          <label htmlFor="cities">Selecciona una ciudad</label>
        </span>
      </div>
    </form>
  );
}

export default CreateAccount;
