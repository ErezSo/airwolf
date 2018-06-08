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

  it("renders counter when counter is a number other than 0", () => {
    const wrapper = shallow(<Cart counter={0} />);
    expect(wrapper.find(".counter")).toHaveLength(0);
    wrapper.setProps({ counter: 8 });
    expect(wrapper.find(".counter")).toHaveLength(1);
    expect(wrapper.find(".counter").text()).toBe("8");
  });
});
