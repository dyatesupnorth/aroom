import hotelsReducer from "../../reducers/hotels";
import hotels from "../fixtures/hotels";

test("should set hotels", () => {
  const action = {
    type: "SET_HOTELS",
    hotels
  };
  const state = hotelsReducer(hotels, action);
  expect(state).toEqual( hotels );
});
