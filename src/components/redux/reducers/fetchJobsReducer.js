import { GET_JOBS_FROM_FETCH } from "../actions";

const initialState = {
  fetchedJobs: [],
};

const fetchJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_FROM_FETCH:
      return {
        ...state,
        fetchedJobs: action.payload,
      };
    default:
      return state;
  }
};

export default fetchJobsReducer;
