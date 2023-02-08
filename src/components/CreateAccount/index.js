import { Formik } from "formik";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { cities, countries, states } from "./utils";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
//Investigar como hacerlo con Toast
function CreateAccount() {
  const [disabled, setDisabled] = useState(true);
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        age: "",
        country: "",
        state: "",
        city: "",
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
        if (!values.age) errors.age = "1";
        else if (values.age < 18 || values.age > 99) errors.age = "1";
        if (!values.country) errors.country = "1";
        if (!values.state) errors.state = "1";
        if (!values.city) errors.city = "1";
        if (!values.password) errors.password = "1";
        else if (values.password.length < 6) errors.password = "1";
        if (Object.keys(errors).length === 0) setDisabled(false);
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
        setUser(true);
        navigate("/users");
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
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
            <small>Máximo 50 cáracteres y solo puede contener letras (puede llevar acentos)</small>
          </div>
          <div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-calendar"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  id="age"
                  name="age"
                  keyfilter="int"
                  className="p-inputtext-sm"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="age">Edad</label>
              </span>
            </div>
            <small>Entre 18 y 99 años (inclusivo)</small>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-map"></i>
            </span>
            <span className="p-float-label">
              <Dropdown
                options={countries}
                name="countries"
                inputId="countries"
                className="p-inputtext-sm"
                onChange={(e) => setFieldValue("country", e.value)}
                onBlur={handleBlur}
                value={values.country}
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
                name="states"
                inputId="states"
                className={
                  values.country
                    ? "p-inputtext-sm"
                    : "p-inputtext-sm p-disabled"
                }
                onChange={(e) => setFieldValue("state", e.value)}
                onBlur={handleBlur}
                value={values.state}
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
                name="cities"
                inputId="cities"
                className={
                  values.state ? "p-inputtext-sm" : "p-inputtext-sm p-disabled"
                }
                onChange={(e) => setFieldValue("city", e.value)}
                onBlur={handleBlur}
                value={values.city}
              />
              <label htmlFor="cities">Selecciona una ciudad</label>
            </span>
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
          <div>
          <Button
            type="submit"
            label="Enviar"
            icon="pi pi-check"
            className="flex m-auto p-button-rounded"
            disabled={disabled}
          />
          <Link to="/login" className="anchor">Ya tengo cuenta</Link>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default CreateAccount;
