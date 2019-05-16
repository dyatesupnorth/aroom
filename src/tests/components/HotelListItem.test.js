import React from "react";
import { shallow } from "enzyme";
import { HotelListItem } from "../../components/HotelListItem";

test("should render HotelListItem", () => {
  const wrapper = shallow(<HotelListItem />);
  expect(wrapper).toMatchSnapshot();
});
