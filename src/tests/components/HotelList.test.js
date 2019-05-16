import React from "react";
import { shallow } from "enzyme";
import { HotelList } from "../../components/HotelList";

test("should render HotelList", () => {
  const wrapper = shallow(<HotelList />);
  expect(wrapper).toMatchSnapshot();
});
