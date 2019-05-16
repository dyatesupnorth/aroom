import axios from "axios";
export const setHotels = hotels => ({
  type: "SET_HOTELS",
  hotels
});

export const startSetHotels = () => {
  return dispatch => {
    return axios.get("data.json").then(res => console.log(res));
  };
};
