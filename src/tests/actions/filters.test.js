import { setTextFilter } from "../../actions/filters";

test("should set text filter without params", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should set text filter with params ", () => {
  const text = "hotelone";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should set star rating without params ", () => {
  const starRating = "";
  const action = setStarRatingFilter(starRating);

  expect(action).toEqual({
    type: "SET_STAR_RATING_FILTER",
    starRating: ""
  });
});

test("should set star rating with params", () => {
  const starRating = 5;
  const action = setStarRatingFilter(starRating);

  expect(action).toEqual({
    type: "SET_STAR_RATING_FILTER",
    starRating
  });
});
