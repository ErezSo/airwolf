import React from "react";

const styles = {
  box: {
    width: "100%",
    height: "100%",
    textAlign: "center"
  }
};

const ItemBox = ({ item, idx, itemOpacity }) => {
  const { box } = styles;
  return (
    <div style={{ ...box, ...itemOpacity }}>
      <img src={`assets/${item.img}`} alt={`item${idx}`} />
    </div>
  );
};

export default ItemBox;
