// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const DESTROY_CAR = 'DESTROY_CAR';
export const ADD_CAR = 'ADD_CAR';

export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function destroyCar(history, car) {
  fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`,
    { method: 'DELETE' })
    .then(response => response.json())
    .then(() => history.push(""));

  return {
    type: DESTROY_CAR,
    payload: car
  };
}

export function addCar(car) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`,
    { method: 'POST' },
    body: {
      "brand": "PEUGEOT",
      "model": "106",
      "owner": "ssaunier",
      "plate": "123AZ56"
      })
    .then(response => response.json());
  return {
    type: ADD_CAR,
    payload: promise
  };
}
