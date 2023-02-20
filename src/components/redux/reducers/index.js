import { FAVOURITE_JOBS, REMOVE_JOBS } from "../actions";

const initialState = {
  jobList: [],
};

const joblistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITE_JOBS:
      return {
        ...state,
        jobList: [...state.jobList, action.payload],
        //   jobList: state.jobs.jobList.filter((jobs) => jobs !== action.payload),
      };
    case REMOVE_JOBS:
      return {
        ...state,
        jobList: state.jobList.filter((jobs, index) => jobs !== action.payload),
      };

    default:
      return state;
  }
};

export default joblistReducer;
