import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

const options = ["Ciudad 1","Ciudad 2","Ciudad 3"];

function App() {
  return (
    <div>
      <div className='p-inputgroup'>
      <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
        </span>
        <InputText placeholder='Nombre'/>
      </div>
      <div className='p-inputgroup'>
      <span className="p-inputgroup-addon">
        <i className="pi pi-calendar"></i>
        </span>
        <InputNumber/>
      </div>
      <div className='p-inputgroup'>
      <span className="p-inputgroup-addon">
        <i className="pi pi-calendar"></i>
        </span>
        <Dropdown placeholder='Selecciona un país' options={options}/>
      </div>
    </div>
  );
}

export default App;
