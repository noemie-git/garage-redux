// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const DESTROY_CAR = 'DESTROY_CAR';

export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(car) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
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
