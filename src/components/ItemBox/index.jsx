import React from "react";

const styles = {
  itemBox: {
    width: "100%",
    height: "100%",
    flex: 1,
    boxShadow: "3px 3px 5px 6px #f5f6f6",
    margin: "10px"
  }
};

function ItemBox({ item, idx, reserveItem }) {
  const { itemBox } = styles;
  return (
    <div style={itemBox}>
      <img src={`assets/${item}`} alt={`item${idx}`} onClick={reserveItem} />
    </div>
  );
}

export default ItemBox;
