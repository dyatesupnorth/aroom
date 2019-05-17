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
