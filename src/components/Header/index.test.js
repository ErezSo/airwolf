import React from "react";
import { shallow } from "enzyme";
import Header from "./";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
