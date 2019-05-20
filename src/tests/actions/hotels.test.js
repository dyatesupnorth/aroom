import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import sinon from "sinon";

import hotels from "../fixtures/hotels";
import { setHotels, startSetHotels } from "../../actions/hotels";
const createMockStore = configureMockStore([thunk]);
let sandbox;
beforeEach(() => (sandbox = sinon.sandbox.create()));
afterEach(() => sandbox.restore());
test("should setup hotel action object with data", () => {
  const action = setHotels(hotels);

  expect(action).toEqual({
    type: "SET_HOTELS",
    hotels
  });
});

test("should fetch hotels from x", done => {
  const store = createMockStore();
  store.dispatch(startSetHotels());
  const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_HOTELS",
      hotels
    });
});
