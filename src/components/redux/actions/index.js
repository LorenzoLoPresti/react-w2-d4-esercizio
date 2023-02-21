export const FAVOURITE_JOBS = "FAVOURITE_JOBS";
export const REMOVE_JOBS = "REMOVE_JOBS";
export const GET_JOBS_FROM_FETCH = "GET_JOBS_FROM_FETCH";
export const LOADING_ON = "LOADING_ON";
export const LOADING_OFF = "LOADING_OFF";
export const FETCH_ERROR_ON = "FETCH_ERROR_ON";
export const FETCH_ERROR_OFF = "FETCH_ERROR_OFF";

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
    dispatch({
      type: LOADING_ON,
    });
    dispatch({
      type: FETCH_ERROR_OFF,
    });
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_JOBS_FROM_FETCH,
          payload: data,
        });
      } else {
        dispatch({
          type: FETCH_ERROR_ON,
          payload: "la tua chiamata è andata male",
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_ERROR_ON,
        payload: error.message,
      });
    }
    // dispatch({
    //   type: LOADING_OFF,
    // });
    setTimeout(() => {
      dispatch({
        type: LOADING_OFF,
      });
    }, 2000);
  };
};
