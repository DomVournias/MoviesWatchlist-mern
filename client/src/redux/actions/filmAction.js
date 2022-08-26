import { postDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const FILM_TYPES = {
  SAVE_FILM: "SAVE_FILM",
  LOADING_FILM: "LOADING_FILM",
  GET_FILMS: "GET_FILMS",
  UPDATE_FILM: "UPDATE_FILM",
  GET_FILM: "GET_FILM",
  REMOVE_FILM: "REMOVE_FILM",
};

export const saveFilm =
  ({ filmInfo, user, auth }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

      const res = await postDataAPI(
        "api/films/save",
        { filmInfo, user },
        auth.token
      );
      console.log(auth);
      // console.log(...res.data.newFilm);
      dispatch({
        type: FILM_TYPES.SAVE_FILM,
        payload: { ...res.data.newFilm, user: auth.user },
      });

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };
