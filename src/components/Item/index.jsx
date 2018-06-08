import React, { Component } from "react";
import { ItemBox, OrderButton } from "../";

const styles = {
  container: {
    height: 300
  },
  itemWrapper: {
    minWidth: 200,
    minHeight: 200,
    boxShadow: "0 0 10px 10px #f5f6f6, 0 0 20px 20px #f5f6f6",
    margin: "10px 10px 20px",
    position: "relative"
  },
  textWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontSize: 13,
    textAlign: "center",
    width: 164
  }
};

class Item extends Component {
  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState(({ hover }) => ({ hover: !hover }));
  };

  render() {
    const { item, idx, reserveItem } = this.props;
    const { itemWrapper, container, textWrapper, itemText } = styles;
    let buttonContainerStyle, itemOpacity;
    if (this.state.hover) {
      buttonContainerStyle = { display: "block" };
      itemOpacity = { opacity: "0.2" };
    } else {
      buttonContainerStyle = { display: "none" };
      itemOpacity = { opacity: "1" };
    }

    return (
      <div style={container}>
        <div
          style={itemWrapper}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <OrderButton
            containerStyle={buttonContainerStyle}
            reserveItem={reserveItem}
          />
          <ItemBox item={item} idx={idx} itemOpacity={itemOpacity} />
        </div>
        <div style={textWrapper}>
          <div style={itemText}>
            42mm Silver Aluminum Case with Scuba Blue Woven Nylon
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
