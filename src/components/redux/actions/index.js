export const FAVOURITE_JOBS = "FAVOURITE_JOBS";
export const REMOVE_JOBS = "REMOVE_JOBS";
export const GET_JOBS_FROM_FETCH = "GET_JOBS_FROM_FETCH";

export const addFavouriteAction = (jobs) => {
  return {
    type: FAVOURITE_JOBS,
    payload: jobs,
  };
};

export const removeFavouriteAction = (jobs) => {
  return {
    type: REMOVE_JOBS,
    payload: jobs,
  };
};

export const fetchJobListAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_JOBS_FROM_FETCH,
          payload: data,
        });
      }
    } catch (error) {}
  };
};
