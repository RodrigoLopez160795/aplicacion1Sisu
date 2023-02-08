const express = require("express");
const { countries, states, cities } = require("./data");
const app = express();
const port = 8080;

const user = [];

//Devuelve la lista de países
app.get("/paises", (req, res) => {
  res.status(200).json(countries);
});

// Devuelve los estados por país
app.get("/estados/:countryId", (req, res) => {
  const { countryId } = req.params;
  const statesArray = states.filter((state) => state.countryId == countryId);
  if (statesArray.length === 0)
    res.status(404).json({ message: "No se encontro" });
  else res.status(200).json(statesArray);
});

//Devuelve las ciudades por estado
app.get("/ciudades/:stateId", (req, res) => {
  const { stateId } = req.params;
  const citiesArray = cities.filter((city) => city.stateId == stateId);
  if (citiesArray.length === 0)
    res.status(404).json({ message: "No se encontro" });
  else res.status(200).json(citiesArray);
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
