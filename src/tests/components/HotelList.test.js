import React from "react";
import { shallow } from "enzyme";
import { HotelList } from "../../components/HotelList";
import hotels from "../fixtures/hotels";

test("should render HotelList", () => {
  const wrapper = shallow(<HotelList hotels={hotels} />);
  expect(wrapper).toMatchSnapshot();
});
