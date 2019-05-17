const filtersReducerDefaultState = {
  text: "",
  starRating: "",
  facilities: ""
};
export default (state = filtersReducerDefaultState, action) => {
  console.log("​state", state);
  console.log("​action", action);
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
      console.log(state.facilities.indexOf(action.facility));
      return state.facilities.indexOf(action.facility) !== -1
        ? // Facility exists, remove it
          state.facilities.filter(facility => {
            return facility !== action.facility;
          })
        : // Facility does not exist, add it
          {
            ...state,
            facilities: [...state.facilities, action.facility]
          };
    default:
      return state;
  }
};
