import axios from "axios";
export const setHotels = hotels => ({
  type: "SET_HOTELS",
  hotels
});

export const startSetHotels = () => {
  return dispatch => {
    return axios.get("http://localhost:3001/hotels").then(res => {
      return dispatch(setHotels(res.data));
    });
  };
};
