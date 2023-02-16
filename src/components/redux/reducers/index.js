const initialState = {
  jobs: {
    jobList: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAVOURITE_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          jobList: [...state.jobs.jobList, action.payload],
          //   jobList: state.jobs.jobList.filter((jobs) => jobs !== action.payload),
        },
      };
    case "REMOVE_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          jobList: state.jobs.jobList.filter(
            (jobs, index) => index !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
