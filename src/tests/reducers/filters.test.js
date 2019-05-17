import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  // type: @@INIT is a redux reducers initial state, setting it here allows us to test the reducer without the suite blowing up.
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    starRating: "",
    facilities: []
  });
});
