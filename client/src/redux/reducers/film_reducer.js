import { FILM_TYPES } from "../actions/filmAction";

const initialState = {
  loading: false,
  films: [],
  result: 0,
  page: 1,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILM_TYPES.SAVE_FILM:
      return {
        ...state,
        films: [action.payload, ...state.films],
      };
    case FILM_TYPES.LOADING_FILM:
      return {
        ...state,
        loading: action.payload,
      };
    case FILM_TYPES.GET_FILMS:
      return {
        ...state,
        films: action.payload.films,
        result: action.payload.result,
        page: action.payload.page,
      };

    default:
      return state;
  }
};

export default filmReducer;
