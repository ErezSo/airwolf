import React from "react";
import { shallow } from "enzyme";
import OrderButton from "./";

describe("OrderButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OrderButton />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
