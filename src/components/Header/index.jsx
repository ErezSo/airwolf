import React from "react";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between"
  },
  left: {
    margin: "0 40px"
  },
  cart: {
    margin: "0 40px"
  }
};

export default function Header() {
  const { container, left, cart } = styles;
  return (
    <div style={container}>
      <span style={left} />
      <span>
        <img src="assets/vimcar-logo.svg" alt="logo" />
      </span>
      <span style={cart}>
        <img src="assets/cart.svg" alt="cart" />
      </span>
    </div>
  );
}
