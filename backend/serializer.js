const { createToken } = require("./token");

function userSerializer(user, needToken = true) {
  if (needToken)
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      country: user.country,
      state: user.state,
      city: user.city,
      token: createToken(user),
    };
  else
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      country: user.country,
      state: user.state,
      city: user.city,
    };
}

module.exports = userSerializer;
