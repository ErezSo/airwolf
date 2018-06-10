import React from "react";
import { shallow } from "enzyme";
import ItemBox from "./";

describe("ItemBox", () => {
  let wrapper;
  const item = { id: "h38ss-dtbl", img: "h38ss-dtbl-sel-201603.png" };

  beforeEach(() => {
    wrapper = shallow(<ItemBox item={item} idx={2} />);
  });

  it("renders", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
