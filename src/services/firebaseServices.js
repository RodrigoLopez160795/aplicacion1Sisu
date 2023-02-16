import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export async function createUser(credentials) {
  const response = await createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );
  return response;
}

export async function getCountries() {
  let response = [];
  const querySnapshot = await getDocs(collection(db, "data"));
  await querySnapshot.forEach((doc) => response.push(doc.data()));
  return response[0].countries;
}

export async function getStates(id) {
  let response = [];
  const querySnapshot = await getDocs(collection(db, "data"));
  await querySnapshot.forEach((doc) => response.push(doc.data()));
  return response[0].states.filter((element) => element.countryId === id);
}

export async function getCities(id) {
  let response = [];
  const querySnapshot = await getDocs(collection(db, "data"));
  await querySnapshot.forEach((doc) => response.push(doc.data()));
  return response[0].cities.filter((element) => element.stateId === id);
}
