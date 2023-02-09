import { BASE_URI } from "../config";

export async function loadCountries(){
    const response = await fetch(`${BASE_URI}/paises`);
    return await response.json();;
}

export async function loadStates(id){
    const response = await fetch(`${BASE_URI}/estados/${id}`);
    return await response.json();
}

export async function loadCities(id){
    const response = await fetch(`${BASE_URI}/ciudades/${id}`);
    return await response.json();
}