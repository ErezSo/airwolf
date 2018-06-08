import React from "react";
import { Cart } from "../";

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

export default function Header({ cartCounter }) {
  const { container, left, cart } = styles;
  return (
    <div style={container}>
      <span style={left} />
      <span>
        <img src="assets/vimcar-logo.svg" alt="logo" />
      </span>
      <span style={cart}>
        <Cart counter={cartCounter} />
      </span>
    </div>
  );
}
