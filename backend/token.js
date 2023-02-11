const jwt = require("jsonwebtoken");
const privateKey = "SISU";

function createToken(user) {
  return jwt.sign(user, privateKey);
}

module.exports = { createToken };
