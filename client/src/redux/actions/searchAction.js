import { GLOBALTYPES } from "./globalTypes";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_URL,
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

export const searchFilms =
  ({ name }) =>
  async (dispatch) => {
    try {
      const result = await fetch(
        `https://movie-database-alternative.p.rapidapi.com/?s=${name}&r=json&page=1`,
        options
      );
      const json = await result.json();

      dispatch({
        type: GLOBALTYPES.SEARCH,
        payload: { results: json.Search, searchValue: name },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };
