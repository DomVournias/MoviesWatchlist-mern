// import { useSearch } from "../../API/SearchAPI";
import { GLOBALTYPES } from "./globalTypes";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e11fdea180mshc9fdd8e8fb14fbap1990fcjsna531dcdcad63",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

export const searchFilms =
  ({ name }) =>
  async (dispatch) => {
    try {
      // const { searchResults, error } = await useSearch(name);
      // console.log(searchResults, error);
      // dispatch({
      //   type: GLOBALTYPES.SEARCH,
      //   payload: name,
      // });

      const result = await fetch(
        `https://movie-database-alternative.p.rapidapi.com/?s=${name}&r=json&page=1`,
        options
      );
      const json = await result.json();
      console.log(json.Search);

      dispatch({
        type: GLOBALTYPES.SEARCH,
        payload: json.Search,
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
