import React from "react";
import { shallow } from "enzyme";
import Cart from "./";

describe("Cart", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cart />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
