import { Fieldset } from "primereact/fieldset";
import CreateAccount from "../CreateAccount";

const legendTemplate = (
  <div>
    <span className="pi pi-user mr-2"></span>
    <span className="font-bold text-lg">Crea tu cuenta</span>
  </div>
);

function FormContainer() {
  return (
    <div className="w-screen h-screen flex justify-content-center align-items-center">
      <div className="w-8 h-auto">
        <Fieldset legend={legendTemplate}>
          <CreateAccount />
        </Fieldset>
      </div>
    </div>
  );
}

export default FormContainer;
