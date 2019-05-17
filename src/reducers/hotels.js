const hotelsReducerDefaultState = [];

export default (state = hotelsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_HOTELS":
      return action.hotels;
    default:
      return state;
  }
};
