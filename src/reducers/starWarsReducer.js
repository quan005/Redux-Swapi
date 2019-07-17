/* we need our action types here*/
import {GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAILED} from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetchingData: false,
  errorMessage: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_DATA_START: {
      return {
        ...state,
        fetchingData: true
      }
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        fetchingData: false,
        characters: action.payload.results,
        errorMessage: null,
      }
    }

    case GET_DATA_FAILED: {
      return {
        ...state
      }
    }

    default:
      return state;
  }
};
