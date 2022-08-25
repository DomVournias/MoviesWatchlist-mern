import { PROFILE_TYPES } from "../actions/profileAction";

const initialState = {
  loading: false,
  users: [],
  films: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case PROFILE_TYPES.GET_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case PROFILE_TYPES.REMOVE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film._id !== action.payload),
      };

    default:
      return state;
  }
};

export default profileReducer;
