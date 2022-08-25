import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  results: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.SEARCH:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
