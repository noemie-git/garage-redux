import { FETCH_CARS, DESTROY_CAR } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case DESTROY_CAR:
      return state.filter(car => car !== action.payload);
    default:
      return state;
  }
}
