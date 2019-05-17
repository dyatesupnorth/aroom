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
      console.log(state.facilities.indexOf(action.facilities));
      return state.facilities.indexOf(action.facilities) !== -1
        ? // Facility exists, remove it
          state.facilities.filter(facility => {
            return facility !== action.facilities;
          })
        : // Facility does not exist, add it
          {
            ...state,
            facilities: [...state.facilities, action.facilities]
          };
    default:
      return state;
  }
};
