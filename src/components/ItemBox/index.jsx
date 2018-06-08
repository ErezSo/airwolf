import React, { Component } from "react";

const styles = {
  itemBox: {
    width: "100%",
    height: "100%",
    flex: 1,
    boxShadow: "3px 3px 5px 6px #f5f6f6",
    margin: "10px"
  }
};

class ItemBox extends Component {
  handleClick(e) {
    console.log(e.target);
  }
  render() {
    const { item, idx } = this.props;
    const { itemBox } = styles;
    return (
      <div style={itemBox}>
        <img
          src={`assets/${item}`}
          alt={`item${idx}`}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ItemBox;
