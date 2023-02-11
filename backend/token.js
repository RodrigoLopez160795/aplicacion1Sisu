const jwt = require("jsonwebtoken");
const privateKey = "SISU";

function createToken(user) {
  return jwt.sign(user, privateKey);
}

function verifyToken(token) {
  let valid;
  jwt.verify(token, privateKey, (err, decoded) => {
    if (decoded) valid = true;
    else valid = false;
  });
  return valid;
}

module.exports = { createToken, verifyToken };
