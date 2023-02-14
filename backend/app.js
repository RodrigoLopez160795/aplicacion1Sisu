const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {
  getCountries,
  getStates,
  getCities,
  getUsers,
  newUser,
  login,
} = require("./routes");

const app = express();
const port = 8080;

//Para obtener el body del json
app.use(express.json());

app.use(cors());

//Para mostrar las peticiones en la consola
app.use(morgan("dev"));

//Devuelve la lista de países
app.get("/paises", getCountries);

// Devuelve los estados por país
app.get("/estados/:countryId", getStates);

//Devuelve las ciudades por estado
app.get("/ciudades/:stateId", getCities);

// Devuelve los usuarios existentes
app.get("/usuarios", getUsers);

// Postea un nuevo usuario
app.post("/usuarios", newUser);

// Iniciar sesión
app.post("/login", login);

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
