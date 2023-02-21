import {
  FETCH_ERROR_OFF,
  FETCH_ERROR_ON,
  GET_JOBS_FROM_FETCH,
  LOADING_OFF,
  LOADING_ON,
} from "../actions";

const initialState = {
  fetchedJobs: [],
  loading: false,
  errors: false,
};

const fetchJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_FROM_FETCH:
      return {
        ...state,
        fetchedJobs: action.payload,
      };

    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };

    case FETCH_ERROR_ON: {
      return {
        ...state,
        errors: action.payload,
      };
    }

    case FETCH_ERROR_OFF: {
      return {
        ...state,
        errors: false,
      };
    }
    default:
      return state;
  }
};

export default fetchJobsReducer;
