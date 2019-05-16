import React from "react";
import { shallow } from "enzyme";
import { HomePageBanner } from "../../components/HomePageBanner";

test("should render HomePageBanner", () => {
  const wrapper = shallow(<HomePageBanner />);
  expect(wrapper).toMatchSnapshot();
});
