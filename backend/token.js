const jwt = require("jsonwebtoken");
const privateKey = "SISU";

function createToken(user) {
  return jwt.sign(user, privateKey);
}

// function verifyToken(token) {
//   jwt.verify(token, privateKey, function (err,decoded) {
//     console.log(err,decoded)
//     if (err) {
//       return {
//         name: "JsonWebTokenError",
//         message: "Token invalido",
//       };
//     } else return true;
//   });
// }

function verifyToken(token) {
  let valid;
  jwt.verify(token, privateKey , (err, decoded) => {
    if (decoded) valid = true;
    else valid = false;
  });
  return valid;
}

module.exports = { createToken, verifyToken };
