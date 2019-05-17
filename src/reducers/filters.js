const filtersReducerDefaultState = {
  text: "",
  starRating: "",
  facilities: []
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_STAR_RATING_FILTER":
      return {
        ...state,
        starRating: action.starRating
      };
    case "SET_FACILITIES_FILTER":
      return {
        ...state,
        facilities: action.facilities
      };
    default:
      return state;
  }
};
