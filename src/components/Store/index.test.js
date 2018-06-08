import React from "react";
import { shallow } from "enzyme";
import Store from "./";

describe("Store", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Store />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
