import { createBrowserHistory } from "history";
import { FETCH_CARS, FETCH_CAR, DESTROY_CAR } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    case DESTROY_CAR: {
      const newState = Object.assign([], state);
      const indexOfCarToDelete = state.findIndex((car) => {
        return car.id === action.car.id;
      });
      newState.splice(indexOfCarToDelete, 1);
      const history = createBrowserHistory();
      history.push('/');
      return newState;
    }

    default:
      return state;
  }
}
