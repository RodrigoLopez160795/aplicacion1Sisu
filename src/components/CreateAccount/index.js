import { Formik } from "formik";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { createUser } from "../../services/user";
import { USER_TOKEN } from "../../config";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import { Toast } from "primereact/toast";
import {
  createFirebaseUser,
  getCities,
  getCountries,
  getStates,
} from "../../services/firebaseServices";

function CreateAccount() {
  const [disabled, setDisabled] = useState(true);
  const { setToken } = useContext(UserContext);
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);
  const [cities, setCities] = useState(null);
  const toast = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

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
        else setDisabled(true);
        return errors;
      }}
      onSubmit={(values, actions) => {
        // createUser(values).then(({ user, message }) => {
        //   if (!user) {
        //     toast.current.show({
        //       severity: "error",
        //       summary: "Error",
        //       detail: `${message}`,
        //     });
        //     actions.resetForm();
        //     setDisabled(true);
        //   } else {
        //     localStorage.setItem(USER_TOKEN, user.token);
        //     setToken(user.token);
        //     navigate("/users");
        //   }
        // });
        createFirebaseUser(values).then(console.log);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form className="flex flex-column gap-4" onSubmit={handleSubmit}>
          <Toast ref={toast} />
          <InputText
            id="name"
            name="name"
            icon="user"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Nombre completo"
            small="Máximo 50 cáracteres y solo puede contener letras (puede llevar
                    acentos)"
          />
          <InputText
            id="age"
            name="age"
            icon="calendar"
            keyfilter="int"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Edad"
            small="Entre 18 y 99 años (inclusivo)"
          />
          {countries && (
            <Dropdown
              options={countries}
              name="countries"
              inputId="countries"
              optionLabel="name"
              className="p-inputtext-sm"
              onChange={async (e) => {
                await setFieldValue("state", "");
                await setFieldValue("city", "");
                const response = await getStates(e.value.id);
                await setFieldValue("country", e.value);
                await setStates(response);
              }}
              onBlur={handleBlur}
              value={values.country}
              label="Selecciona un país"
            />
          )}
          <Dropdown
            options={states}
            optionLabel="name"
            name="states"
            inputId="states"
            className={
              values.country ? "p-inputtext-sm" : "p-inputtext-sm p-disabled"
            }
            onChange={async (e) => {
              await setFieldValue("city", "");
              const response = await getCities(e.value.id);
              await setFieldValue("state", e.value);
              await setCities(response);
            }}
            onBlur={handleBlur}
            value={values.state}
            label="Selecciona un estado"
          />
          <Dropdown
            options={cities}
            name="cities"
            inputId="cities"
            optionLabel="name"
            className={
              values.state ? "p-inputtext-sm" : "p-inputtext-sm p-disabled"
            }
            onChange={(e) => setFieldValue("city", e.value)}
            onBlur={handleBlur}
            value={values.city}
            label="Selecciona una ciudad"
          />
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
            <Link to="/login">
              <Button
                label="Ya tengo cuenta"
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

export default CreateAccount;
