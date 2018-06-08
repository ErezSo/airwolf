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

  it("reacts to clicks", () => {
    const spyOnReserveItem = jest.fn();
    const wrapper = shallow(<OrderButton reserveItem={spyOnReserveItem} />);
    wrapper.find(".reserveButton").simulate("click");
    expect(spyOnReserveItem.mock.calls.length).toBe(1);
  });
});
