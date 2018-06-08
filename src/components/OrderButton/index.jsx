import React from "react";

const styles = {
  buttonBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "10",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  orderButton: {
    width: 139,
    height: 33,
    border: "2px solid black",
    fontSize: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600
  }
};

function OrderButton({ containerStyle, reserveItem }) {
  const { buttonBox, orderButton } = styles;
  return (
    <div style={containerStyle}>
      <div style={buttonBox} onClick={reserveItem}>
        <div style={orderButton}>Add to Cart</div>
      </div>
    </div>
  );
}

export default OrderButton;
