import { deleteDataAPI, getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const PROFILE_TYPES = {
  LOADING: "LOADING",
  GET_USER: "GET_USER",
  GET_FILMS: "GET_FILMS",
  SAVE_FILM: "SAVE_FILM",
  REMOVE_FILM: "REMOVE_FILM",
};

export const getUserProfile =
  ({ username, auth }) =>
  async (dispatch) => {
    try {
      dispatch({ type: PROFILE_TYPES.LOADING, payload: true });
      // Getting the user
      const res = await getDataAPI(`user/${username}`, auth.token);

      const users = await res;

      // Setting the user in state
      dispatch({
        type: PROFILE_TYPES.GET_USER,
        payload: users.data,
      });

      dispatch({ type: PROFILE_TYPES.LOADING, payload: false });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const getUserFilms =
  ({ id, auth }) =>
  async (dispatch) => {
    try {
      dispatch({ type: PROFILE_TYPES.LOADING, payload: true });

      const res = await getDataAPI(`user_films/${id}`, auth.token);

      const films = res.data.films;

      dispatch({
        type: PROFILE_TYPES.GET_FILMS,
        payload: films,
      });

      dispatch({ type: PROFILE_TYPES.LOADING, payload: false });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      });
    }
  };

export const removeFilm =
  ({ auth, id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: PROFILE_TYPES.REMOVE_FILM, payload: id });

      let userId = auth.user._id;

      const res = await deleteDataAPI(
        `user_films/${userId}/${id}/remove`,
        auth.token
      );
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };
