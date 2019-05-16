const hotelsReducerDefaultState = [];
export default (state = hotelsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_EXPENSES":
      return action.hotels;
    default:
      return state;
  }
};
