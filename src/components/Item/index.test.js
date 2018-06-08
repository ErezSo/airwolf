import React from "react";
import { shallow } from "enzyme";
import Item from "./";

describe("Item", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
