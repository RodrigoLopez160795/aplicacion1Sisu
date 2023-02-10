const db = require("./firebase");

async function getData() {
  const querySnapshot = await db.collection("data").get();
  return querySnapshot.docs[0].data();
}

async function postUser(credentials) {
  try {
    await db.collection("users").add(credentials);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getData, postUser };
