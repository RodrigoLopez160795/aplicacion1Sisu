import { Fieldset } from "primereact/fieldset";
import PropTypes from "prop-types";
import CreateAccount from "../CreateAccount";
import Login from "../Login";

function LegendTemplate({ form }) {
  return (
    <div>
      <span className="pi pi-user mr-2"></span>
      <span className="font-bold text-lg">
        {form === "create" ? "Crea tu cuenta" : "Inicia Sesión"}
      </span>
    </div>
  );
}

const selectForm = {
  create: <CreateAccount />,
  login: <Login />,
};

function FormContainer({ form = "create" }) {
  return (
    <div className="w-screen h-screen flex justify-content-center align-items-center">
      <div className="w-8 h-auto">
        <Fieldset legend={<LegendTemplate form={form} />}>
          {selectForm[form]}
        </Fieldset>
      </div>
    </div>
  );
}

FormContainer.propTypes = {
  form: PropTypes.oneOf(["create", "login"]),
};

export default FormContainer;
