import { FETCH_CARS, ADD_CAR, DESTROY_CAR } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case DESTROY_CAR:
      return state.filter(car => car !== action.payload);
    case ADD_CAR:
      return action.payload;
    default:
      return state;
  }
}
