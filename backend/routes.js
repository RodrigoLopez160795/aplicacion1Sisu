const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const userSerializer = require("./serializer");
const { getData, postUser } = require("./services");
const { verifyToken } = require("./token");

function getCountries(req, res) {
  getData("data").then((data) => {
    res.status(200).json(data.countries);
  });
}

function getStates(req, res) {
  getData("data").then((data) => {
    const { countryId } = req.params;
    const statesArray = data.states.filter(
      (state) => state.countryId == countryId
    );
    if (statesArray.length === 0)
      res.status(404).json({ message: "No se encontro" });
    else res.status(200).json(statesArray);
  });
}

function getCities(req, res) {
  getData("data").then((data) => {
    const { stateId } = req.params;
    const citiesArray = data.cities.filter((city) => city.stateId == stateId);
    if (citiesArray.length === 0)
      res.status(404).json({ message: "No se encontro" });
    else res.status(200).json(citiesArray);
  });
}

function getUsers(req, res) {
  const [header, token] = req.headers.authorization.split(" ");
  if (header === "Bearer" && verifyToken(token)) {
    getData("users", true).then((data) => {
      res
        .status(200)
        .json(data.map((doc) => userSerializer(doc.data(), false)));
    });
  } else res.status(401).json({ message: "No estas autorizado" });
}

function newUser(req, res) {
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
}

function login(req, res) {
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
}

module.exports = {
  getCountries,
  getStates,
  getCities,
  getUsers,
  newUser,
  login,
};
