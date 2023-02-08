import { Formik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Login() {
  const [disabled, setDisabled] = useState(true);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "1";
        else if (
          !/^[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(
            values.name.replace(/\s+/g, "")
          )
        )
          errors.name = "1";
        if (!values.password) errors.password = "1";
        else if (values.password.length < 6) errors.password = "1";
        if (Object.keys(errors).length === 0) setDisabled(false);
        else setDisabled(true);
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
        setUser(true);
        navigate("/users");
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form className="flex flex-column gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  id="name"
                  name="name"
                  className="p-inputtext-sm"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="name">Nombre completo</label>
              </span>
            </div>
            <small>
              Máximo 50 cáracteres y solo puede contener letras (puede llevar
              acentos)
            </small>
          </div>
          <div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <span className="p-float-label">
                <Password
                  name="password"
                  inputId="password"
                  className="p-inputtext-sm"
                  onChange={handleChange}
                  value={values.password}
                  toggleMask
                />
                <label htmlFor="password">Contraseña</label>
              </span>
            </div>
            <small>Mínimo 6 cáracteres</small>
          </div>
          <div className="flex justify-content-around">
            <Link to="/create-account">
              <Button
                label="No tengo cuenta"
                className="p-button-link p-button-sm"
              />
            </Link>
            <Button
              type="submit"
              label="Enviar"
              icon="pi pi-check"
              className="p-button-rounded"
              disabled={disabled}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Login;
