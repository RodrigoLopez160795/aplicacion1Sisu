const express = require("express");
const cors = require("cors");
const { v4: uuidv4, validate } = require("uuid");
const morgan = require("morgan");
const { getData, postUser } = require("./services");
const bcrypt = require("bcryptjs");
const userSerializer = require("./serializer");
const { verifyToken } = require("./token");

const app = express();
const port = 8080;

//Para obtener el body del json
app.use(express.json());

app.use(cors());

//Para mostrar las peticiones en la consola
app.use(morgan("dev"));

//Devuelve la lista de países
app.get("/paises", (req, res) => {
  getData("data").then((data) => {
    res.status(200).json(data.countries);
  });
});

// Devuelve los estados por país
app.get("/estados/:countryId", (req, res) => {
  getData("data").then((data) => {
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
  getData("data").then((data) => {
    const { stateId } = req.params;
    const citiesArray = data.cities.filter((city) => city.stateId == stateId);
    if (citiesArray.length === 0)
      res.status(404).json({ message: "No se encontro" });
    else res.status(200).json(citiesArray);
  });
});

// Devuelve los usuarios existentes
app.get("/usuarios", (req, res) => {
  const [header, token] = req.headers.authorization.split(" ");
  if (header === "Bearer" && verifyToken(token)) {
    getData("users", true).then((data) => {
      res
        .status(200)
        .json(data.map((doc) => userSerializer(doc.data(), false)));
    });
  } else res.status(401).json({ message: "No estas autorizado" });
});

// Postea un nuevo usuario
app.post("/usuarios", (req, res) => {
  const { name, age, country, state, city, password } = req.body;
  const user = {
    id: uuidv4(),
    name,
    age,
    country,
    state,
    city,
    password: bcrypt.hashSync(password, 10),
  };
  if (Object.values(user).some((e) => e === undefined))
    res.status(403).json({ message: "Faltan datos" });
  else {
    postUser(user).then(
      res.status(201).json({
        message: "Usuario agregado correctamente",
        user: userSerializer(user),
      })
    );
  }
});

// Iniciar sesión
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  getData("users", true).then((data) => {
    if (!name || !password) res.status(403).json({ message: "Faltan datos" });
    else {
      let user = data.find(
        (doc) =>
          doc.data().name === name &&
          bcrypt.compareSync(password, doc.data().password)
      );
      if (user) {
        res
          .status(200)
          .json({ message: "Bienvenido", user: userSerializer(user.data()) });
      } else res.status(401).json({ message: "Credenciales inválidas" });
    }
  });
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
