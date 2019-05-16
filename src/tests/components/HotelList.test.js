import React from "react";
import { shallow } from "enzyme";
import { HotelList } from "../../components/HotelList";
import hotels from "../fixtures/hotels";

test("should render HotelList correctly", () => {
  const wrapper = shallow(<HotelList hotels={hotels} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render HotelList with no hotels correctly", () => {
  const wrapper = shallow(<HotelList hotels={[]} />);
  expect(wrapper).toMatchSnapshot();
});


