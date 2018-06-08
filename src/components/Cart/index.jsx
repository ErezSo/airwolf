import React from "react";

const styles = {
  counterNum: {
    position: "absolute",
    width: 20,
    height: 15,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontSize: 10,
    borderRadius: 25,
    top: 26,
    right: 24
  }
};

function Cart({ counter }) {
  const { counterNum } = styles;
  return (
    <div>
      <img src="assets/cart.svg" alt="cart" />
      {counter > 0 && <span style={counterNum}>{counter}</span>}
    </div>
  );
}

export default Cart;
