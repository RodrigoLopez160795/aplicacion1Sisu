const db = require("./firebase");

async function getData(collection, allCollections = false) {
  const querySnapshot = await db.collection(collection).get();
  if (allCollections) return querySnapshot.docs;
  else return querySnapshot.docs[0].data();
}

async function postUser(credentials) {
  try {
    await db.collection("users").add(credentials);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getData, postUser };
