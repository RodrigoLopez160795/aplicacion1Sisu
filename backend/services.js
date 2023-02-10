const db = require("./firebase");

async function getData() {
  const querySnapshot = await db.collection("data").get()
  return querySnapshot.docs[0].data();
}

module.exports = { getData };
//.doc("77htc3WfARKw1jIA5X6N");