import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  searchValue: "",
  results: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.SEARCH:
      return {
        ...state,
        results: action.payload.results,
        searchValue: action.payload.searchValue,
      };
    default:
      return state;
  }
};

export default searchReducer;
