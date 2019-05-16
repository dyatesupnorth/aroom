import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/'
export const setHotels = hotels => ({
  type: "SET_HOTELS",
  hotels
});

export const startSetHotels = () => {
  return dispatch => {
    return axios.get("hotels").then(res => 
      dispatch(setHotels(res.data))
      );
  };
};
