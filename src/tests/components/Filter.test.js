import React from "react";
import { shallow } from "enzyme";
import { Filter } from "../../components/Filter";

test("should render Filter", () => {
  const wrapper = shallow(<Filter />);
  expect(wrapper).toMatchSnapshot();
});
