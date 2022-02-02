// TODO: add and export your own actions
import { history } from "history";

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const DESTROY_CAR = 'DESTROY_CAR';

export function fetchCars() {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/:garage/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function destroyCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`,
    {
      method: 'DELETE',
    }
  )
    .then((response) => {
      console.log(`car removed: ${response}`);
      history.push("/");
      return response.json();
    });

  return {
    type: DESTROY_CAR,
    payload: promise
  };
}
