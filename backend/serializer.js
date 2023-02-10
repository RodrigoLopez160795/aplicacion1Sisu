function userSerializer(user, token) {
  return {
    id: user.id,
    name: user.name,
    age: user.age,
    country: user.country,
    state: user.state,
    city: user.city,
    token,
  };
}

module.exports = userSerializer;
