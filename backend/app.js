const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const morgan = require("morgan");
const { getData, postUser } = require("./services");
const db = require("./firebase");

const app = express();
const port = 8080;
let users = [];
//Para obtener el body del json
app.use(express.json());

app.use(cors());

//Para mostrar las peticiones en la consola
app.use(morgan("dev"));

//Devuelve la lista de países
app.get("/paises", (req, res) => {
  getData().then((data) => {
    res.status(200).json(data.countries);
  });
});

// Devuelve los estados por país
app.get("/estados/:countryId", (req, res) => {
  getData().then((data) => {
    const { countryId } = req.params;
    const statesArray = data.states.filter(
      (state) => state.countryId == countryId
    );
    if (statesArray.length === 0)
      res.status(404).json({ message: "No se encontro" });
    else res.status(200).json(statesArray);
  });
});

//Devuelve las ciudades por estado
app.get("/ciudades/:stateId", (req, res) => {
  getData().then((data) => {
    const { stateId } = req.params;
    const citiesArray = data.cities.filter((city) => city.stateId == stateId);
    if (citiesArray.length === 0)
      res.status(404).json({ message: "No se encontro" });
    else res.status(200).json(citiesArray);
  });
});

// Devuelve los usuarios existentes
app.get("/usuarios", (req, res) => {
  res.status(200).json(users);
});

// Postea un nuevo usuario
app.post("/usuarios", (req, res) => {
  const { name, age, country, state, city, password } = req.body;
  const user = {
    id: uuidv4(),
    name: name,
    age: age,
    country: country,
    state: state,
    city: city,
    password: password,
  };
  if (Object.values(user).some((e) => e === undefined))
    res.status(403).json({ message: "Faltan datos" });
  else {
    postUser(user).then(
      res.status(201).json({ message: "Usuario agregado correctamente" })
    );
  }
});

// Iniciar sesión
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  if (name === undefined || password === undefined)
    res.status(403).json({ message: "Faltan datos" });
  if (users.some((user) => user.name === name && user.password === password))
    res.status(200).json({ message: "Bienvenido" });
  else res.status(401).json({ message: "Credenciales inválidas" });
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
