import { BASE_URI } from "../config";

export async function createUser(credentials) {
  const response = await fetch(`${BASE_URI}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return await response.json();
}

export async function indexUsers(token) {
  const response = await fetch(`${BASE_URI}/usuarios`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}

export async function login(credentials) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return await response.json();
}
