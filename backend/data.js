const countries = [
  { id: 1, name: "México" },
  { id: 2, name: "Estados Unidos" },
  { id: 3, name: "Canadá" },
];
const states = [
  { id: 1, countryId: 1, name: "Jalisco" },
  { id: 2, countryId: 1, name: "Baja California" },
  { id: 3, countryId: 1, name: "Nuevo León" },
  { id: 4, countryId: 2, name: "Luisiana" },
  { id: 5, countryId: 2, name: "California" },
  { id: 6, countryId: 2, name: "Ohio" },
  { id: 7, countryId: 3, name: "Alberta" },
  { id: 8, countryId: 3, name: "Manitoba" },
  { id: 9, countryId: 3, name: "Quebec" },
];

const cities = [
  { id: 1, stateId: 1, name: "Guadalajara" },
  { id: 2, stateId: 1, name: "Zapopan" },
  { id: 3, stateId: 1, name: "Arandas" },
  { id: 4, stateId: 2, name: "Mexicali" },
  { id: 5, stateId: 2, name: "Ensenada" },
  { id: 6, stateId: 2, name: "Tijuana" },
  { id: 7, stateId: 3, name: "Monterrey" },
  { id: 8, stateId: 3, name: "Ciudad Apodaca" },
  { id: 9, stateId: 3, name: "Santa Catarina" },
  { id: 10, stateId: 4, name: "Nueva Orleans" },
  { id: 11, stateId: 4, name: "Baton Rouge" },
  { id: 12, stateId: 4, name: "Bossier City" },
  { id: 13, stateId: 5, name: "Los Ángeles" },
  { id: 14, stateId: 5, name: "San Francisco" },
  { id: 15, stateId: 5, name: "San Diego" },
  { id: 16, stateId: 6, name: "Columbus" },
  { id: 17, stateId: 6, name: "Cleveland" },
  { id: 18, stateId: 6, name: "Cincinnati" },
  { id: 19, stateId: 7, name: "Calgary" },
  { id: 20, stateId: 7, name: "Edmonton" },
  { id: 21, stateId: 7, name: "Leduc" },
  { id: 22, stateId: 8, name: "Winnipeg" },
  { id: 23, stateId: 8, name: "Brandon" },
  { id: 24, stateId: 8, name: "Morden" },
  { id: 25, stateId: 9, name: "Quebec" },
  { id: 26, stateId: 9, name: "Montreal" },
  { id: 27, stateId: 9, name: "Granby" },
];

module.exports = { countries, states, cities };
