import React from "react";
import { shallow } from "enzyme";
import { HotelListItem } from "../../components/HotelListItem";
import hotels from "../fixtures/hotels";

test("should render HotelListItem with hotel", () => {
  const wrapper = shallow(<HotelListItem {...hotels[0]} />);
  expect(wrapper).toMatchSnapshot();
});


test("should render HotelListItem with hotel and no facilities", () => {
  const wrapper = shallow(<HotelListItem {...hotels[3]} />);
  expect(wrapper).toMatchSnapshot();
});