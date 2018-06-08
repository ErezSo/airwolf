import React from "react";
import { shallow } from "enzyme";
import ItemBox from "./";

describe("ItemBox", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ItemBox />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
