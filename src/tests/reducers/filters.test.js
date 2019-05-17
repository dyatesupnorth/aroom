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

test("should set text filter", () => {
  const text = "hotelone";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set star rating filter", () => {
  const starRating = "5";
  const action = {
    type: "SET_STAR_RATING_FILTER",
    starRating
  };
  const state = filtersReducer(undefined, action);
  expect(state.starRating).toBe(starRating);
});

test("should set faciltiies filter", () => {
  const facilities = ["car park"];
  const action = {
    type: "SET_FACILITIES_FILTER",
    facilities
  };
  const state = filtersReducer(undefined, action);
  expect(state.facilities).toBe(facilities);
});
