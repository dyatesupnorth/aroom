import axios from "axios";

export const hotels = () => [
  {
    name: "hotelone",
    starRating: 5,
    facilities: ["car park", "pool"]
  },
  {
    name: "hoteltwo",
    starRating: 3,
    facilities: ["car park", "gym"]
  },
  {
    name: "hotelthree",
    starRating: 3,
    facilities: []
  }
];

export const setHotels = hotels => ({
  type: "SET_HOTELS",
  hotels
});

export const startSetHotels = () => {
  return dispatch => {
    return dispatch(setHotels(hotels()));
  };
};
