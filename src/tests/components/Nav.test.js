import React from "react";
import { shallow } from "enzyme";
import { Nav } from "../../components/Nav";

test("should render HotelListItem", () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper).toMatchSnapshot();
});
