import {
  setTextFilter,
  setStarRatingFilter,
  setFacilitiesFilter
} from "../../actions/filters";

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

test("should set facilities without params ", () => {
  const facility = "";
  const action = setFacilitiesFilter(facility);

  expect(action).toEqual({
    type: "SET_FACILITIES_FILTER",
    facility
  });
});

test("should set facilities with params", () => {
  const facility = "car park";
  const action = setFacilitiesFilter(facility);

  expect(action).toEqual({
    type: "SET_FACILITIES_FILTER",
    facility
  });
});
